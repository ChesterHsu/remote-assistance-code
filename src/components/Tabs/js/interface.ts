import * as React from "react";
import { IProps } from '@/components/SvgIcon/index'



export interface TabsProps {
    uid: string,
    name: string,
    closeLocation?: 'front' | 'back'
    icon?: IProps,
    iconLocation?: 'front' | 'back',
    onStart?: () => void;
    onHover?: (e) => void;
    tabStyle?: React.CSSProperties;
    tabDetailStyle?: React.CSSProperties;
    tabClassName?: string;
    tabDetailClassName?: string;
    closeTab: () => void;
}
