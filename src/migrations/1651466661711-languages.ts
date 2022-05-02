import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class languages1651466661711 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'languages',
        columns: [
          {
            name: 'id',
            isPrimary: true,
            type: 'int',
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'language',
            type: 'varchar',
          },
          {
            name: 'language_name',
            type: 'varchar',
          },
          {
            name: 'created_at',
            type: 'timestamptz',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamptz',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // const table = await queryRunner.getTable('news');
    // const foreignKey = table.foreignKeys.find(
    //   (fk) => fk.columnNames.indexOf('language_id') !== -1,
    // );
    // await queryRunner.dropForeignKey('news', foreignKey);
    await queryRunner.dropTable('languages');
  }
}
