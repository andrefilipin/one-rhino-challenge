import { Body, Controller, Post } from '@nestjs/common';
import { ConvertService } from './convert.service';
import { ConvertDTo } from './convert.dto';

@Controller('convert')
export class ConvertController {

  constructor(private readonly service: ConvertService) { }

  @Post('/')
  convert(@Body() data: ConvertDTo) {
    return { "arabic": this.service.romainToArabic(data.roman) };
  }
}
