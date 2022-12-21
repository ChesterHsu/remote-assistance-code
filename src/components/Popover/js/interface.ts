import * as React from "react";

export interface PopoverProps {
    open: boolean,
    PopoverChildren?: React.ElementType,
    followID: string,
    popoverClassName?: string,
}

export interface  PopoverMessage {
    fileName: string,
    fileSize: string,
    filePatch: string,
}
