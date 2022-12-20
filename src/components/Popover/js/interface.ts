import * as React from "react";

export interface PopoverProps {
    open: boolean,
    type: '' | 'svg' | 'png',
    message: string | PopoverMessage,
    popoverStyle?: React.CSSProperties,
    popoverClassName?: string,
}

export interface  PopoverMessage {
    fileName: string,
    fileSize: string,
    filePatch: string,
}
