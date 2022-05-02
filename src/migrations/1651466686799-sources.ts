import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class sources1651466686799 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'sources',
        columns: [
          {
            name: 'id',
            isPrimary: true,
            type: 'int',
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'source',
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
    //   (fk) => fk.columnNames.indexOf('source_id') !== -1,
    // );
    // await queryRunner.dropForeignKey('news', foreignKey);
    await queryRunner.dropTable('languages');
  }
}
