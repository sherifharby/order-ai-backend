import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ required: true })
  password: string; // bcrypt

  @Prop({
    type: String,
    enum: ['ADMIN', 'REVIEWER'],
    default: 'REVIEWER',
  })
  role: 'ADMIN' | 'REVIEWER';
}

export const UserSchema = SchemaFactory.createForClass(User);
