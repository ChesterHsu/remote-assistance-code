import React from "react";

export interface IconProps {
    iconName: string,
    wrapperClassName?: string,
    svgProp?: React.SVGProps<SVGSVGElement>,
    darkTheme?: Boolean | String,
    onStart?: () => void,
}

export interface SvgDarkColor {
    dark: string,
    light: string,
}
