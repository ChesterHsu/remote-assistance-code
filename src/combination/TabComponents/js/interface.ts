import { Tab } from "@/components/Tabs/js/interface";

/**  @type {ProjectTabProps}
 *   @property {string} patch Popover 會顯示路徑的參數.
 * **/
export interface ProjectTabProps extends Tab {
    patch: string;
}

export interface FileTabProps extends Tab, FileValue {

}

/**  @type {FileValue}
 *   @property {string} webkitRelativePath 帶入路徑,會將其拆分分析後傳出對應資料.
 * **/
export interface FileValue {
    webkitRelativePath: string,
    fileSize: string,
}
