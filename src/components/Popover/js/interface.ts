import * as React from "react";

interface Popover {
    open: boolean,
    referenceID: string,
    spacing?: number,
    placement?: 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end'
}

export interface PopoverProps extends Popover{
    PopoverChildren?: React.ElementType,
    popoverClassName?: string,
}

export interface TextPopoverProps extends Popover{
    text: string,
}
