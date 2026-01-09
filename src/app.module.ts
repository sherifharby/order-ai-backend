import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { AiModule } from './ai/ai.module';
import { OcrModule } from './ocr/ocr.module';
import { AuditModule } from './audit/audit.module';
import { AuthModule } from './auth/auth.module';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/order_ai'),
    OrdersModule,
    AiModule,
    OcrModule,
    AuditModule,
    AuthModule,
  ],
})
export class AppModule {}
