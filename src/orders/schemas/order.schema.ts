import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class Order extends Document {
  @Prop()
  originalText: string;

  @Prop({ type: Array })
  items: {
    name: string;
    size?: string;
    qty: number;
    price: number;
    confidence: number;
  }[];

  @Prop()
  total: number;

  @Prop()
  confidence: number;

  @Prop({ default: 'PENDING' })
  status: 'AUTO_APPROVED' | 'PENDING' | 'REJECTED';

  @Prop()
  reviewedBy?: string;
}

export const OrderSchema = SchemaFactory.createForClass(Order);
