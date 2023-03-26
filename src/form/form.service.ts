import { Injectable } from "@nestjs/common";
import { CreateForm } from './dto/create-form.dto';

import { Form } from "./schemas/form.schema";
import { FormRepository } from "./form.repository";

@Injectable()
export class FormService {
    constructor(private readonly formRepository: FormRepository) { }

    async getFarmById(formId: string): Promise<Form> {
        return this.formRepository.findOne({ formId })
    }

    async getForms(): Promise<Form[]> {
        return this.formRepository.find({});
    }

    async createForm(form: CreateForm): Promise<Form> {
        const formObj = {
            formId: form.formId,
            formName: form.formName,
            fields: form.fields,
            createdOn: new Date()
        };

        const isExist = await this.getFarmById(form.formId);
        if (isExist) return this.updateForm(form.formId, formObj)
        return this.formRepository.create(formObj)
    }

    async updateForm(formId: string, udpatedForm: CreateForm): Promise<CreateForm> {
        return this.formRepository.findOneAndUpdate({ formId }, udpatedForm);
    }

    async deleteForm(formId: string, udpatedForm: CreateForm): Promise<CreateForm> {
        return this.formRepository.findOneAndRemove({ formId }, udpatedForm);
    }
}