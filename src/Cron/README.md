# CRON
## Version 1.0.0

### Comandos Perzonalizados:
```
* -> any value
, -> value list separator
- -> range of values
/ -> step values

`@yearly`,  - Run once a year, midnight, Jan. 1 - 0 0 1 1 *
`@annually` - Run once a year, midnight, Jan. 1 - 0 0 1 1 *
`@monthly`  - Run once a month, midnight, first of month - 0 0 1 * *
`@weekly`   - Run once a week, midnight on Sun - 0 0 * * 0
`@daily`    - Run once a day, midnight - 0 0 * * *
`@hourly`   - Run once an hour, first minute - 0 * * * *

complex expressions

'3-59/15 6-12 */15 1 2-5'
```

### Funcion:
```
// Inicializa cron
        $cron = \App\Cron\CronExpression::factory('*/5 * * * *');
// Verifica si se debe ejecuta el cron boolean
        $cron->isRunDate();
// Calcular una fecha de ejecución anterior
        $cron->getPreviousRunDate();
// Calcular una fecha de ejecución dos iteraciones hacia el atras
        $cron->getPreviousRunDate(null, 2);
// Calcular una fecha de ejecución siguiente
        $cron->getNextRunDate();
// Calcular una fecha de ejecución dos iteraciones hacia el futuro
        $cron->getNextRunDate(null, 2);
```

### CRON:
```
* * * * * cd /home/beto/www/imm && php bin/console cron:run
```
