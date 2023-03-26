import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './form/form.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb+srv://awsomeForm:awsomeForm@cluster0.yshhb7i.mongodb.net/?retryWrites=true&w=majority'), FormModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }