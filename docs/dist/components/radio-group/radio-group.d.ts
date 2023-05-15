import '../button-group/button-group';
import { FormControlController } from '../../internal/form';
import BuckeyeElement from '../../internal/buckeye-element';
import type { BuckeyeFormControl } from '../../internal/buckeye-element';
import type { CSSResultGroup } from 'lit';
export default class RadioGroup extends BuckeyeElement implements BuckeyeFormControl {
    static styles: CSSResultGroup;
    protected readonly formControlController: FormControlController;
    private readonly hasSlotController;
    private customValidityMessage;
    private validationTimeout;
    defaultSlot: HTMLSlotElement;
    validationInput: HTMLInputElement;
    private hasButtonGroup;
    private errorMessage;
    defaultValue: string;
    label: string;
    helpText: string;
    name: string;
    value: string;
    size: 'small' | 'medium' | 'large';
    form: string;
    required: boolean;
    get validity(): ValidityState;
    get validationMessage(): string;
    connectedCallback(): void;
    firstUpdated(): void;
    private getAllRadios;
    private handleRadioClick;
    private handleKeyDown;
    private handleLabelClick;
    private handleSlotChange;
    private handleInvalid;
    private updateCheckedRadio;
    handleValueChange(): void;
    checkValidity(): boolean;
    getForm(): HTMLFormElement | null;
    reportValidity(): boolean;
    setCustomValidity(message?: string): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'bui-radio-group': RadioGroup;
    }
}
