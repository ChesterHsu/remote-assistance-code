import { Popover } from '@/components/Popover/js/interface';

/**  @type {TextPopoverProps}
 *   @property {string} text 顯示在Tab中的文字.
 *   @property {string} TextPopoverClassName Text Popover ClassName.
 * **/
export interface TextPopoverProps extends Popover {
  text: string;
  TextPopoverClassName?: string;
}

/**  @type {SvgPopoverProps}
 *   @property {string} svgPopoverClassName Svg Popover ClassName.
 * **/
export interface SvgPopoverProps extends Popover, FileInformation {
  svgPopoverClassName?: string;
}

/**  @type {FileInformation}
 *   @property {string} file 檔案名稱.
 *   @property {string} fileSize 檔案大小.
 *   @property {string} fileType 檔案副檔名型別.
 *   @property {string} filePatch 檔案路徑.
 * **/
export interface FileInformation {
  file: string;
  fileSize: string;
  fileType: string;
  filePatch: string;
}
