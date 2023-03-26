export class fields {
    id: string;
    name: string;
    label: string;
    type: any[];
    createdAt: Date;
}

export class CreateForm {
    formId: string;
    formName: string;
    fields: fields[];
    createdOn: Date;
}