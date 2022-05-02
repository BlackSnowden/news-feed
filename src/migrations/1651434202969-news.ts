import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class news1651434202969 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'news',
        columns: [
          {
            name: 'id',
            isPrimary: true,
            type: 'int',
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'title',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'news_url',
            type: 'varchar',
          },
          {
            name: 'news_publication_date_UTC',
            type: 'varchar',
          },
          {
            name: 'country_id',
            type: 'int',
          },
          // {
          //   name: 'source_id',
          //   type: 'int',
          // },
          // {
          //   name: 'category_id',
          //   type: 'int',
          // },
          // {
          //   name: 'language_id',
          //   type: 'int',
          // },
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
      true,
    );
    // queryRunner.clearSqlMemory();
    // await queryRunner.createForeignKeys('news', [
    //   new TableForeignKey({
    //     name: 'country_id_fk',
    //     columnNames: ['country_id'],
    //     referencedColumnNames: ['id'],
    //     referencedTableName: 'countries',
    //     onDelete: 'CASCADE',
    //   }),
    // new TableForeignKey({
    //   columnNames: ['source_id'],
    //   referencedColumnNames: ['id'],
    //   referencedTableName: 'sources',
    //   onDelete: 'CASCADE',
    // }),
    // new TableForeignKey({
    //   columnNames: ['category_id'],
    //   referencedColumnNames: ['id'],
    //   referencedTableName: 'categories',
    //   onDelete: 'CASCADE',
    // }),
    // new TableForeignKey({
    //   columnNames: ['language_id'],
    //   referencedColumnNames: ['id'],
    //   referencedTableName: 'languages',
    //   onDelete: 'CASCADE',
    // }),
    // ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('news');
  }
}
