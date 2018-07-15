export class FormBase<T> {
    key: string;
    formElementType: string;
    formElementSubType: string;
    formElementTitle: string;
    order: number;
    required: boolean;

    constructor(options: {
        key?: string,
        formElementType?: string,
        formElementSubType?: string,
        formElementTitle?: string,
        order?: number,
        required?: boolean
    } = {}) {
        this.key = options.key;
        this.formElementType = options.formElementType;
        this.formElementSubType = options.formElementSubType || '';
        this.formElementTitle = options.formElementTitle;
        this.order = options.order === undefined ? 1 : options.order;
        this.required = !!options.required;
    }
}
