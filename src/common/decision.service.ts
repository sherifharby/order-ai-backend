import { Injectable } from '@nestjs/common';

@Injectable()
export class DecisionService {
  autoApprove(parsedOrder: any): boolean {
    return parsedOrder.items.every(
      (item: any) => item.confidence >= 0.85 && item.qty > 0
    );
  }
}
