import { Body, Controller, Get, Param, Patch, Post, Delete } from '@nestjs/common';
import { CreateForm } from './dto/create-form.dto';
import { Form } from './schemas/form.schema';
import { FormService } from './form.service';

@Controller('form')
export class FormController {
  constructor(private readonly formService: FormService) { }

  @Get(':formId')
  async getForm(@Param('formId') formId: string): Promise<Form> {
    return this.formService.getFarmById(formId);
  }

  @Get()
  async getForms(): Promise<Form[]> {
    return this.formService.getForms();
  }

  @Post()
  async createForm(@Body() createFormDto: CreateForm): Promise<Form> {
    return this.formService.createForm(createFormDto)
  }

  @Patch(':formId')
  async updateForm(@Param('formId') formId: string, @Body() updatedForm: CreateForm): Promise<any> {
    return this.formService.updateForm(formId, updatedForm);
  }

  @Delete(':formId')
  async deleteForm(@Param('formId') formId: string, @Body() updatedForm: CreateForm): Promise<any> {
    return this.formService.deleteForm(formId, updatedForm);
  }
}
