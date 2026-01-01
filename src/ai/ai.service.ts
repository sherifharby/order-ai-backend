import { Injectable } from '@nestjs/common';
import { products } from '../data/products';

@Injectable()
export class AiService {
  parseOrder(text: string) {
    const lines = text.split('\n');
    const items: any[] = [];

    for (const line of lines) {
      for (const p of products) {
        if (line.toLowerCase().includes(p.name.toLowerCase())) {
          items.push({
            name: p.name,
            size: p.size || null,
            qty: parseInt(line.match(/\d+/)?.[0] || '1'),
            price: p.price,
            confidence: 0.9,
          });
        }
      }
    }

    return {
      items,
      discountPercent: 0
    };
  }
}
