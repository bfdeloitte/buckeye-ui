import type { BuckeyeFormControl } from '../internal/buckeye-element';
import type { ReactiveController, ReactiveControllerHost } from 'lit';
import type Button from '../components/button/button';
export declare const formCollections: WeakMap<HTMLFormElement, Set<BuckeyeFormControl>>;
export interface FormControlControllerOptions {
    form: (input: BuckeyeFormControl) => HTMLFormElement | null;
    name: (input: BuckeyeFormControl) => string;
    value: (input: BuckeyeFormControl) => unknown | unknown[];
    defaultValue: (input: BuckeyeFormControl) => unknown | unknown[];
    disabled: (input: BuckeyeFormControl) => boolean;
    reportValidity: (input: BuckeyeFormControl) => boolean;
    setValue: (input: BuckeyeFormControl, value: unknown) => void;
    assumeInteractionOn: string[];
}
export declare class FormControlController implements ReactiveController {
    host: BuckeyeFormControl & ReactiveControllerHost;
    form?: HTMLFormElement | null;
    options: FormControlControllerOptions;
    constructor(host: ReactiveControllerHost & BuckeyeFormControl, options?: Partial<FormControlControllerOptions>);
    hostConnected(): void;
    hostDisconnected(): void;
    hostUpdated(): void;
    private attachForm;
    private detachForm;
    private handleFormData;
    private handleFormSubmit;
    private handleFormReset;
    private handleInteraction;
    private reportFormValidity;
    private setUserInteracted;
    private doAction;
    getForm(): HTMLFormElement | null;
    reset(submitter?: HTMLInputElement | Button): void;
    submit(submitter?: HTMLInputElement | Button): void;
    setValidity(isValid: boolean): void;
    updateValidity(): void;
    emitInvalidEvent(originalInvalidEvent?: Event): void;
}
export declare const validValidityState: ValidityState;
export declare const valueMissingValidityState: ValidityState;
export declare const customErrorValidityState: ValidityState;
