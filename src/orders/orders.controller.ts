// eslint-disable-next-line prettier/prettier
import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { OrdersService } from './orders.service';

@Controller('orders')
export class OrdersController {
  constructor(private service: OrdersService) {}

  @Post('process')
  @UseInterceptors(FileInterceptor('image'))
  async process(@UploadedFile() file) {
    return this.service.process(file.path);
  }
}
