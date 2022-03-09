<?php

namespace App\Command;

use App\Service\CoreService;
use App\Service\ConnectorService;
use Doctrine\ORM\EntityManagerInterface;
use Symfony\Component\Console\Helper\Table;
use Symfony\Component\Console\Command\Command;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Style\SymfonyStyle;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;
use Symfony\Component\DependencyInjection\ContainerBuilder;

class OrderPullCommand extends Command
{
    protected static $defaultName = 'order:pull';
    protected static $TYPE        = "order-input";
    private $em;

    public function __construct(
        EntityManagerInterface $em,
        CoreService $coreService,
        ConnectorService $_CONN
    )
    {
        $this->em    = $em;
        $this->_CONN = $_CONN;
        $this->_CORE = $coreService;
        parent::__construct();
    }

    protected function configure()
    {
        $this
            ->setDescription('Receive orders to various applications')
            ->addArgument('connector', InputArgument::REQUIRED, 'connector of cliente')
            ->addOption('date', 'd', InputOption::VALUE_REQUIRED, 'date of execution')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output): int
    {
        $last_date = (empty($input->getOption('date'))) ? null : new \DateTime($input->getOption('date'));  
        $run_at    = new \DateTime("NOW");
        $conn      = $input->getArgument('connector');

        $connector = $this->em->getRepository('App\Entity\Connector')->findOneBy(["code"=>$conn]);
        
        if (empty($connector)){
            $output->writeln("<fg=#ff0>El código << {$conn} >> no esta asociado a ningun connector registrado.</>");
            return false;
        }

        if (empty($last_date) || is_null($last_date)) {
            $history = $this->em->getRepository('App\Entity\ConnectorHistory')->lastSync($connector, self::$TYPE);
            $last_date = isset($history) ? $history->getExecution() : $run_at;
        }

        $table = new Table($output);
        $table
            ->setHeaderTitle('Receive Orders')
            ->setHeaders(['Parameter', 'Value'])
            ->setRows([
                ['Connector', $conn],
                ['Status', $connector->getIsActive() ? "<fg=green>ACTIVE</>" : "<fg=yellow>INACTIVE</>"],
                ['Client', $connector->getClient()->getName()],
                ['Application', $connector->getApplication()->getName()],
                ['Input Order', $connector->hasInputType("order") ? "<fg=green>ENABLED</>" : "<fg=#c0392b>DISABLED</>"],
                ['Last Date', $last_date->format('Y-m-d H:i:s')],
            ])
        ;
        $table->render();

        if ($connector->getIsActive() == false || $connector->hasInputType("order") == false) return false;

        try {
            $send_res = $this->_CONN->pullOrder($connector,$last_date);
            $output->writeln("Ordenes Procesadas: <info>{$send_res}</info>");
            $message = $send_res;
        } catch (\Throwable $th) {
            $message = $th->getMessage();
            $connector->logger('err',$th->getMessage());
            $output->writeln("<error>{$th->getMessage()}</error>");
        }

        $this->_CORE->logger("{$connector->getClient()->getStrategy()}_{$run_at->format('Ymd')}",
        [
            "type"      => self::$TYPE, 
            "connector" => $connector->getCode(),
            "execution" => $last_date->format('Y-m-d H:i:s'),
            "response"  => "Ordenes Recibidas $message",
        ], "info");
        
        $this->em->getRepository('App\Entity\ConnectorHistory')->saveHistory($connector,
            [
                "type"          => self::$TYPE,
                "message"       => $message,
                "execution_at"  => $run_at
            ]
        );

        // $io = new SymfonyStyle($input, $output);
        // $io->success('Proceso Finalizado.');
        return true;
    }
}