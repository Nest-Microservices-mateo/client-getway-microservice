import { Module } from '@nestjs/common';
import { ProductsModule } from './products/products.module';
import { OrdersModule } from './orders/orders.module';
import { NastModule } from './transport/nast.module';

@Module({
  imports: [ProductsModule, OrdersModule, NastModule],
})
export class AppModule {}
