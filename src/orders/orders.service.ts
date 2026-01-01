import { Injectable } from '@nestjs/common';
import { OcrService } from '../ocr/ocr.service';
import { AiService } from '../ai/ai.service';
import { DecisionService } from '../common/decision.service';

@Injectable()
export class OrdersService {
  constructor(
    private ocrService: OcrService,
    private aiService: AiService,
    private decisionService: DecisionService
  ) {}

  async process(imagePath: string) {
    const text = await this.ocrService.extractText(imagePath);
    const parsed = this.aiService.parseOrder(text);
    const status = this.decisionService.autoApprove(parsed)
      ? 'AUTO_APPROVED'
      : 'NEEDS_REVIEW';

    return { text, parsed, status };
  }
}
