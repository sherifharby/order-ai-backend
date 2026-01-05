import { Injectable } from '@nestjs/common';
import { OcrService } from '../ocr/ocr.service';
import { AiService } from '../ai/ai.service';
import { DecisionService } from '../decision/decision.service';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './schemas/order.schema';
// @Injectable()
// export class OrdersService {
//   constructor(
//     private ocrService: OcrService,
//     private aiService: AiService,
//     private decisionService: DecisionService
//   ) {}

//   async process(imagePath: string) {
//     const text = await this.ocrService.extractText(imagePath);
//     const parsed = this.aiService.parseOrder(text);
//     const status = this.decisionService.autoApprove(parsed)
//       ? 'AUTO_APPROVED'
//       : 'NEEDS_REVIEW';

//     return { text, parsed, status };
//   }
// }
@Injectable()
export class OrdersService {
  constructor(
    private ocr: OcrService,
    private ai: AiService,
    private decision: DecisionService,
    @InjectModel(Order.name) private orderModel: Model<Order>,
  ) {}

  async process(imagePath: string) {
    const text = await this.ocr.extractText(imagePath);
    const items = this.ai.match(text);
    const decision = this.decision.decide(items);

    const total = items.reduce((s, i) => s + i.price * i.qty, 0);

    return this.orderModel.create({
      originalText: text,
      items,
      total,
      confidence: decision.confidence,
      status: decision.status,
    });
  }
}
