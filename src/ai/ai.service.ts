// import { Injectable } from '@nestjs/common';
// import { products } from '../data/products';

// @Injectable()
// export class AiService {
//   parseOrder(text: string) {
//     const lines = text.split('\n');
//     const items: any[] = [];

//     for (const line of lines) {
//       for (const p of products) {
//         if (line.toLowerCase().includes(p.name.toLowerCase())) {
//           items.push({
//             name: p.name,
//             size: p.size || null,
//             qty: parseInt(line.match(/\d+/)?.[0] || '1'),
//             price: p.price,
//             confidence: 0.9,
//           });
//         }
//       }
//     }

//     return {
//       items,
//       discountPercent: 0
//     };
//   }
// }
import { Injectable } from '@nestjs/common';
import { products } from '../data/products';

@Injectable()
export class AiService {
  match(text: string) {
    // eslint-disable-next-line prettier/prettier
    const items: { name: string; size: string; qty: number; price: number; confidence: number }[] = [];

    for (const p of products) {
      if (text.includes(p.name)) {
        items.push({
          name: p.name,
          size: p.sizes[0],
          qty: 1,
          price: p.price,
          confidence: 0.85,
        });
      }
    }

    return items;
  }
}
