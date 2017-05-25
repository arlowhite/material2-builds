import 'rxjs/add/operator/takeUntil';
export declare type CdkAccordionDisplayMode = 'default' | 'flat';
/**
 * Directive whose purpose is to manage the expanded state of CdkAccordionItem children.
 */
export declare class CdkAccordion {
    /** A readonly id value to use for unique selection coordination. */
    readonly id: string;
    /** Whether the expansion indicator should be hidden. */
    hideToggle: boolean;
    private _hideToggle;
    /** Whether the panel set should use flat styling. */
    displayMode: CdkAccordionDisplayMode;
    /** Whether the panel set should allow multiple open panels. */
    multi: boolean;
    private _multi;
}
