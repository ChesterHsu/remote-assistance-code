import * as React from "react";

/**
 *  @type {Tab}
 *  @property {string} uid 為Tab唯一值如同key.
 *  @property {string} text 為Tab需顯示內容物.
 *  @property {function} onStart 點擊TabHeader會觸發
 *  @property {function} onHover 移動TabHeader會觸發,isHove = true時 為移動到上方,移開時會轉為false
 * **/
export interface Tab {
    uid: string,
    text: string,
    onStart?: () => void;
    onHover?: (e) => void;
}

/**
 *   @type {TabProps}
 *   @property {string} tabClassName 可賦予 Tab 中 ClassName 新增樣式的參數.
 *   @property {React.CSSProperties} tabStyle 可賦予 Tab 中 Style屬性及參數.
 *   @property {React.ElementType} TabHeader Tab 上層切換功能樣式
 *   @property {React.ElementType} TabContent Tab 內層中資訊顯示功能
 * **/
export interface TabProps {
    tabClassName?: string;
    tabStyle?: React.CSSProperties;
    TabHeader?: React.ElementType;
    TabContent? : React.ElementType;

}

/**  @type {TabHeaderProps}
 *   @property {string} id ID值.
 *   @property {React.CSSProperties} contentStyle 為TabHeader的Style.
 *   @property {string} contentClassName 為TabHeader的Class
 *   @property {string} textClassName 為TabHeader Text的Class
 *   @property {React.ElementType} TextFont TabHeader文字“前”的元件
 *   @property {React.ElementType} TextBack TabHeader文字“後”的元件
 * **/
export interface TabHeaderProps extends Tab{
    id?: string;
    contentStyle?: React.CSSProperties;
    contentClassName?: string;
    textClassName?: string;
    TextFont?: React.ElementType;
    TextBack?: React.ElementType;
}

export interface TextTabProps extends Tab{
    TextProjectTabClassName?: string;
}

export interface FileTabProps extends Tab, FileValue{
    fileTabClassName?: string;
}

export interface FileInformation {
    file: string,
    fileSize: string,
    fileType: string,
    filePatch: string,
}

export interface FileValue {
    webkitRelativePath: string,
    fileSize: string,
}
