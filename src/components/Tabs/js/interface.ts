import * as React from "react";
import { IProps } from '@/components/SvgIcon/index'

export interface TabsProps {
    uid: string,
    fileName: string,
    icon?: IProps,
    onStart?: () => void;
    onHover?: () => void;
    style?: React.CSSProperties;
    tabClassName?: string;
    tabDe
}
