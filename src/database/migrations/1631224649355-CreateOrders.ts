import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateOrders1631224649355 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.createTable(
        new Table(
          { 
            name: "orders",
            columns: [
              {
                name: "id",
                type: "uuid",
                isPrimary: true,
              },
              {
                name: "customer",
                type: "varchar",                
              },
              {
                name: "order_products",
                type: "varchar"
              },
              {
                name: "created_at",
                type: "timestamp",
                default: "now()"
              }
            ]
          }
        )
      )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.dropTable('orders');
    }

}
