import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConvertController } from './convert/convert.controller';
import { ConvertService } from './convert/convert.service';

@Module({
  imports: [],
  controllers: [AppController, ConvertController],
  providers: [ConvertService],
})
export class AppModule {}
