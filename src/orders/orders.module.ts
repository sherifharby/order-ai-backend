import { Module } from '@nestjs/common';
import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';
import { OcrModule } from '../ocr/ocr.module';
import { AiModule } from '../ai/ai.module';
import { DecisionService } from '../common/decision.service';

@Module({
  imports: [OcrModule, AiModule],
  controllers: [OrdersController],
  providers: [OrdersService, DecisionService],
})
export class OrdersModule {}
