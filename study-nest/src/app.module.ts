import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { \[name\]Controller } from './[name/]/[name/].controller';

@Module({
  imports: [],
  controllers: [AppController, \[name\]Controller],
  providers: [AppService],
})
export class AppModule {}
