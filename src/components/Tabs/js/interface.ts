import * as React from "react";
import { IProps } from "@/components/SvgIcon/js/interface";



export interface TabProps {
    TabChildren?: React.ElementType
    tabStyle?: React.CSSProperties;
    tabClassName?: string;
}

export interface TabContentProps {
    uid: string,
    name: string,
    closeLocation?: 'front' | 'back'
    id?: string,
    icon?: IProps,
    iconLocation?: 'front' | 'back',
    onStart?: () => void;
    onHover?: (e) => void;
    tabDetailStyle?: React.CSSProperties;
    tabDetailClassName?: string;
    tabDetailTextClassName?: string;
    closeTab?: () => void;
}
