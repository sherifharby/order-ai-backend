import { Module } from '@nestjs/common';
import { OrdersModule } from './orders/orders.module';
import { AiModule } from './ai/ai.module';
import { OcrModule } from './ocr/ocr.module';
import { AuditModule } from './audit/audit.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [OrdersModule, AiModule, OcrModule, AuditModule, AuthModule],
})
export class AppModule {}
