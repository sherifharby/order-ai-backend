import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OcrModule } from '../ocr/ocr.module';
import { AiModule } from '../ai/ai.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Order, OrderSchema } from './schemas/order.schema';
import { DecisionService } from '../decision/decision.service';
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Order.name, schema: OrderSchema }]),
    OcrModule,
    AiModule,
  ],
  controllers: [OrdersController],
  providers: [OrdersService, DecisionService],
})
export class OrdersModule {}
