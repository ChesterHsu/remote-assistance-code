import * as React from "react";
import { IProps } from "@/components/SvgIcon/js/interface";
import { ReactNode } from "react";



export interface TabsProps {
    TabChildren: ReactNode
    tabStyle?: React.CSSProperties;
    tabClassName?: string;
}

export interface TabContentProps {
    key: string,
    uid: string,
    name: string,
    closeLocation?: 'front' | 'back'
    icon?: IProps,
    iconLocation?: 'front' | 'back',
    onStart?: () => void;
    onHover?: (e) => void;
    tabDetailStyle?: React.CSSProperties;
    tabDetailClassName?: string;
    tabDetailTextClassName?: string;
    closeTab?: () => void;
}
