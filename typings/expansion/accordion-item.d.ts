import { EventEmitter, OnDestroy } from '@angular/core';
import { UniqueSelectionDispatcher } from '../core';
import { CdkAccordion } from './accordion';
/**
 * An abstract class to be extended and decorated as a component.  Sets up all
 * events and attributes needed to be managed by a CdkAccordion parent.
 */
export declare abstract class CdkAccordionItem implements OnDestroy {
    accordion: CdkAccordion;
    protected _uniqueSelectionDispatcher: UniqueSelectionDispatcher;
    /** Event emitted every time the MdAccordianChild is closed. */
    closed: EventEmitter<void>;
    /** Event emitted every time the MdAccordianChild is opened. */
    opened: EventEmitter<void>;
    /** Event emitted when the MdAccordianChild is destroyed. */
    destroyed: EventEmitter<void>;
    /** The unique MdAccordianChild id. */
    readonly id: string;
    /** Whether the MdAccordianChild is expanded. */
    expanded: boolean;
    private _expanded;
    constructor(accordion: CdkAccordion, _uniqueSelectionDispatcher: UniqueSelectionDispatcher);
    /** Emits an event for the accordion child being destroyed. */
    ngOnDestroy(): void;
}
