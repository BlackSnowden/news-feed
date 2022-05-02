import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class countries1651466634216 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'countries',
        columns: [
          {
            name: 'id',
            isPrimary: true,
            type: 'int',
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'country',
            type: 'varchar',
          },
          {
            name: 'country_name',
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
    //   (fk) => fk.columnNames.indexOf('country_id') !== -1,
    // );
    // await queryRunner.dropForeignKey('news', foreignKey);
    await queryRunner.dropTable('countries');
  }
}
