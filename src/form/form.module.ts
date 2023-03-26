import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { Form, FormSchema } from "./schemas/form.schema";
import { FormController } from "./form.controller";
import { FormRepository } from "./form.repository";
import { FormService } from "./form.service";

@Module({
    imports: [MongooseModule.forFeature([{ name: Form.name, schema: FormSchema }])],
    controllers: [FormController],
    providers: [FormService, FormRepository]
})
export class FormModule { }