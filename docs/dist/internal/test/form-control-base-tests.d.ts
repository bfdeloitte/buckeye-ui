import type { BuckeyeFormControl } from '../buckeye-element';
export declare function runFormControlBaseTests<T extends BuckeyeFormControl = BuckeyeFormControl>(tagNameOrConfig: string | {
    tagName: string;
    init?: (control: T) => void;
    variantName: string;
}): void;
