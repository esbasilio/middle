<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20210930235237 extends AbstractMigration
{
    public function getDescription() : string
    {
        return '';
    }

    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE client_attributes DROP FOREIGN KEY FK_A1CFA33116D3A6B9');
        $this->addSql('DROP TABLE attribute_set');
        $this->addSql('DROP TABLE client_attribute_mapping');
        $this->addSql('DROP TABLE client_attribute_set');
        $this->addSql('DROP TABLE client_attributes');
        $this->addSql('DROP TABLE connector_option');
        $this->addSql('ALTER TABLE connector CHANGE output_type output_type LONGTEXT DEFAULT NULL COMMENT \'drive de salida(DC2Type:json)\', CHANGE input_type input_type LONGTEXT DEFAULT NULL COMMENT \'drive de entrada(DC2Type:json)\'');
        $this->addSql('ALTER TABLE connector_attribute CHANGE attribute_values attribute_values LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\'');
        $this->addSql('ALTER TABLE connector_history CHANGE extra extra LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\'');
        $this->addSql('ALTER TABLE log CHANGE dump dump LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', CHANGE request request LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\'');
        $this->addSql('ALTER TABLE product CHANGE images images LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', CHANGE reference_ids reference_ids LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\'');
        $this->addSql('ALTER TABLE product_attribute CHANGE mapping_values mapping_values LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\'');
        $this->addSql('ALTER TABLE product_attribute_set CHANGE reference_id reference_id LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\', CHANGE settings settings LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\'');
        $this->addSql('ALTER TABLE product_connector CHANGE sites sites LONGTEXT DEFAULT NULL COMMENT \'(DC2Type:json)\'');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE attribute_set (id INT AUTO_INCREMENT NOT NULL, client_id INT NOT NULL, name VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, strategy VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created DATETIME NOT NULL, updated DATETIME NOT NULL, INDEX IDX_D01EB06319EB6921 (client_id), UNIQUE INDEX UNIQ_D01EB063144645ED (strategy), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE client_attribute_mapping (id INT AUTO_INCREMENT NOT NULL, client_id INT NOT NULL, attribute_id INT DEFAULT NULL, mapping_value LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_unicode_ci` COMMENT \'(DC2Type:json)\', name VARCHAR(100) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_E831975F19EB6921 (client_id), INDEX IDX_E831975FB6E62EFA (attribute_id), UNIQUE INDEX UNIQ_E831975F5E237E06 (name), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE client_attribute_set (id INT AUTO_INCREMENT NOT NULL, client_id INT NOT NULL, name VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, strategy VARCHAR(255) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, created DATETIME NOT NULL, updated DATETIME NOT NULL, code VARCHAR(50) CHARACTER SET utf8mb4 NOT NULL COLLATE `utf8mb4_unicode_ci`, INDEX IDX_A7A88A5719EB6921 (client_id), UNIQUE INDEX UNIQ_A7A88A57144645ED (strategy), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE client_attributes (client_attribute_set_id INT NOT NULL, attribute_id INT NOT NULL, INDEX IDX_A1CFA33116D3A6B9 (client_attribute_set_id), INDEX IDX_A1CFA331B6E62EFA (attribute_id), PRIMARY KEY(client_attribute_set_id, attribute_id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('CREATE TABLE connector_option (id INT AUTO_INCREMENT NOT NULL, settings LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_bin`, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8 COLLATE `utf8_unicode_ci` ENGINE = InnoDB COMMENT = \'\' ');
        $this->addSql('ALTER TABLE attribute_set ADD CONSTRAINT FK_D01EB06319EB6921 FOREIGN KEY (client_id) REFERENCES client (id)');
        $this->addSql('ALTER TABLE client_attribute_mapping ADD CONSTRAINT FK_E831975F19EB6921 FOREIGN KEY (client_id) REFERENCES client (id)');
        $this->addSql('ALTER TABLE client_attribute_mapping ADD CONSTRAINT FK_E831975FB6E62EFA FOREIGN KEY (attribute_id) REFERENCES attribute (id)');
        $this->addSql('ALTER TABLE client_attribute_set ADD CONSTRAINT FK_A7A88A5719EB6921 FOREIGN KEY (client_id) REFERENCES client (id)');
        $this->addSql('ALTER TABLE client_attributes ADD CONSTRAINT FK_A1CFA33116D3A6B9 FOREIGN KEY (client_attribute_set_id) REFERENCES client_attribute_set (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE client_attributes ADD CONSTRAINT FK_A1CFA331B6E62EFA FOREIGN KEY (attribute_id) REFERENCES attribute (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE connector CHANGE input_type input_type LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_bin` COMMENT \'drive de entrada\', CHANGE output_type output_type LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_bin` COMMENT \'drive de salida\'');
        $this->addSql('ALTER TABLE connector_attribute CHANGE attribute_values attribute_values LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_bin`');
        $this->addSql('ALTER TABLE connector_history CHANGE extra extra LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_bin`');
        $this->addSql('ALTER TABLE log CHANGE dump dump LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_bin`, CHANGE request request LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_bin`');
        $this->addSql('ALTER TABLE product CHANGE images images LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_bin`, CHANGE reference_ids reference_ids LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_bin`');
        $this->addSql('ALTER TABLE product_attribute CHANGE mapping_values mapping_values LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_bin`');
        $this->addSql('ALTER TABLE product_attribute_set CHANGE reference_id reference_id LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_bin`, CHANGE settings settings LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_bin`');
        $this->addSql('ALTER TABLE product_connector CHANGE sites sites LONGTEXT CHARACTER SET utf8mb4 DEFAULT NULL COLLATE `utf8mb4_bin`');
    }
}
