import React from "react";

export interface IProps {
    iconName: string,
    wrapperStyle?: string,
    svgProp?: React.SVGProps<SVGSVGElement>,
    darkTheme?: Boolean | String,
    onStart?: () => void,
}

export interface SvgDarkColor {
    dark: string,
    light: string,
}
