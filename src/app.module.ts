import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { OrderModule } from './order/order.module';
import { TransportController } from './transport/transport.controller';
import { TransportModule } from './transport/transport.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://aphuwakorn2:Peatorart1!@cluster0.nerh8.mongodb.net/store?retryWrites=true&w=majority',
    ),
    ProductModule,
    OrderModule,
    TransportModule,
  ],
  controllers: [AppController, TransportController],
  providers: [AppService],
})
export class AppModule {}
