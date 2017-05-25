import 'rxjs/add/operator/takeUntil';
import { CdkAccordion, CdkAccordionDisplayMode } from './accordion';
import { CdkAccordionItem } from './accordion-item';
import { UniqueSelectionDispatcher } from '../core';
export declare type ExpansionPanelState = 'expanded' | 'collapsed';
/** Time and timing curve for expansion panel animations. */
export declare const EXPANSION_PANEL_ANIMATION_TIMING = "225ms cubic-bezier(0.4,0.0,0.2,1)";
/**
 * <md-expansion-panel> component.
 *
 * This component can be used as a single element to show expandable content, or as one of
 * multiple children of an element with the CdkAccordion directive attached.
 *
 * Please refer to README.md for examples on how to use it.
 */
export declare class MdExpansionPanel extends CdkAccordionItem {
    /** Whether the toggle indicator should be hidden. */
    hideToggle: boolean;
    /** The expansion panel style. */
    panelStyle: CdkAccordionDisplayMode;
    constructor(accordion: CdkAccordion, _uniqueSelectionDispatcher: UniqueSelectionDispatcher);
    /** Toggles the expanded state of the panel. */
    toggle(): void;
    /** Whether the expansion indicator should be hidden. */
    _getHideToggle(): boolean;
    /** Gets the panel's display mode. */
    _getDisplayMode(): CdkAccordionDisplayMode | ExpansionPanelState;
    /** Gets the expanded state string. */
    _getExpandedState(): ExpansionPanelState;
}
