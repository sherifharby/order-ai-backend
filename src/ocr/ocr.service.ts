import { Injectable } from '@nestjs/common';
import Tesseract from 'tesseract.js';

@Injectable()
export class OcrService {
  async extractText(imagePath: string): Promise<string> {
    const { data } = await Tesseract.recognize(imagePath, 'eng');
    return data.text;
  }
}
