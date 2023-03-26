import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { FilterQuery, Model } from "mongoose";
import { Form, FormDocument } from "./schemas/form.schema";

@Injectable()
export class FormRepository {
    constructor(@InjectModel(Form.name) private formModel: Model<FormDocument>) { }

    async findOne(formFilterQuery: FilterQuery<Form>): Promise<Form> {
        return this.formModel.findOne(formFilterQuery);
    }

    async find(formsFilterQuery: FilterQuery<Form>): Promise<Form[]> {
        return this.formModel.find(formsFilterQuery)
    }

    async create(form: Form): Promise<Form> {
        const newForm = new this.formModel(form);
        return newForm.save()
    }

    async findOneAndUpdate(formFilterQuery: FilterQuery<Form>, form: Partial<Form>): Promise<Form> {
        return this.formModel.findOneAndUpdate(formFilterQuery, form, { new: true });
    }

    async findOneAndRemove(formFilterQuery: FilterQuery<Form>, form: Partial<Form>): Promise<Form> {
        return this.formModel.findOneAndDelete(formFilterQuery);
    }
}