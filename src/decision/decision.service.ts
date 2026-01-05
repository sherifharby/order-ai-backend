import { Injectable } from '@nestjs/common';

interface ConfidenceItem {
  confidence: number;
}

@Injectable()
export class DecisionService {
  decide(items: ConfidenceItem[]): { confidence: number; status: string } {
    const avgConfidence =
      items.reduce((s, i) => s + i.confidence, 0) / items.length;

    return {
      confidence: avgConfidence,
      status: avgConfidence >= 0.8 ? 'AUTO_APPROVED' : 'PENDING',
    };
  }
}
