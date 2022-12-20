import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';
import { env } from 'process';

const _logger = new Logger('file_main.ts');
const port = env.ERP_PORT ?? 3_001;

(async function () {
  const app = await NestFactory.create(AppModule);

  await app
    .listen(port)
    .then(() => {
      _logger.log(`Server start ${port}`);
    })
    .catch((err) => {
      _logger.error(err.message);
    });
})();
