import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';

export type FormDocument = Form & Document;

@Schema()
export class Form {
    @Prop()
    formId: string;

    @Prop()
    formName: string;

    @Prop()
    fields: any[];

    @Prop()
    createdOn: Date
}

export class Fields {
    @Prop()
    id: string;

    @Prop()
    name: string;

    @Prop()
    label: string;

    @Prop()
    type: any[];

    @Prop()
    createdOn: Date
}

export const FormSchema = SchemaFactory.createForClass(Form);
export const FieldSchema = SchemaFactory.createForClass(Fields);