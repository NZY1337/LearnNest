import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({
        whitelist: true,              // strips any properties not in the DTO
        forbidNonWhitelisted: true,   // throws error if extra properties exist
        transform: true,              // converts payload to DTO instance
    }));
    await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
