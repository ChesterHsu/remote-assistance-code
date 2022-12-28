import * as React from "react";

export type Placement = 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';

export interface Popover {
    open: boolean,
    referenceID: string,
    spacing?: number,
    placement?: Placement,
}

export interface PopoverProps extends Popover{
    PopoverChildren?: React.ElementType,
    popoverClassName?: string,
}
