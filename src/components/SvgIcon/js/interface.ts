import React from "react";

/**  @type {IconProps}
 *   @property {string} iconName icon 名稱 範例（路徑：src/icons/svg/icon1.svg）iconName: 'icon1'.
 *   @property {string} wrapperClassName icon 外框 ClassName.
 *   @property {React.SVGProps<SVGSVGElement>} svgProp icon Style.
 *   @property {boolean|string} darkTheme 顏色 true 為 Dark 、 字串 {色碼}|{色碼} 豎線前為 Dark 色碼.
 *   @property {function} onStart 點擊Icon後觸發.
 * **/
export interface IconProps {
    iconName: string,
    wrapperClassName?: string,
    svgProp?: React.SVGProps<SVGSVGElement>,
    darkTheme?: boolean | string,
    onStart?: () => void,
}

/**  @type {IconProps}
 *   @property {string} dark Dark色碼.
 *   @property {string} light light色碼.
 * **/
export interface SvgDarkColor {
    dark: string,
    light: string,
}
