import * as React from "react";
import { IProps } from "@/components/SvgIcon/js/interface";

interface Tab {
    uid: string,
    name: string,
    onStart?: () => void;
}

export interface TabProps {
    TabChildren?: React.ElementType
    tabStyle?: React.CSSProperties;
    tabClassName?: string;
}

export interface TabHeaderProps extends Tab{
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

export interface TextTab extends Tab{
    text: string;
    TextProjectTabClassName?: string;
}

export interface FileTab extends Tab{
    patch: string;
    size: string;
    TextProjectTabClassName?: string;
}
