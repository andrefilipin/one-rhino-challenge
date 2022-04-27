import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationException, ValidationFilter } from './validation.filter';
import { ValidationError, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('OneRhino convert API')
    .setDescription('Small service to convert roman number to arabic')
    .setVersion('0.0.1')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.useGlobalFilters(new ValidationFilter());
  app.useGlobalPipes(new ValidationPipe({
    skipMissingProperties: false,
    exceptionFactory: (errors: ValidationError[]) => {
      const msg = {}
      errors.forEach(e => {
        msg[e.property] = [...Object.values(e.constraints)];
      });
      return new ValidationException(msg);
    }
  }));

  await app.listen(3000);
}
bootstrap();
