import * as React from "react";

export type Placement = 'top' | 'top-start' | 'top-end' | 'right' | 'right-start' | 'right-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end';

interface Popover {
    open: boolean,
    referenceID: string,
    spacing?: number,
    placement?: Placement,
}

export interface PopoverProps extends Popover{
    PopoverChildren?: React.ElementType,
    popoverClassName?: string,
}

export interface TextPopoverProps extends Popover{
    text: string,
    TextPopoverClassName?: string,
}

export interface SvgPopoverProps extends Popover, FileInformation{
    svgPopoverClassName?: string,
}

/**  @type {FileInformation}
 *   @property {string} file 檔案名稱.
 *   @property {string} fileSize 檔案大小.
 *   @property {string} fileType 檔案副檔名型別.
 *   @property {string} filePatch 檔案路徑.
 * **/
export interface FileInformation {
    file: string,
    fileSize: string,
    fileType: string,
    filePatch: string,
}
