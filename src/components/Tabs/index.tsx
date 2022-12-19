import '@/css/components/Tab/index.scss'
import React, {ReactElement, ReactNode} from "react";
import {TabContentProps, TabsProps} from "@/components/Tabs/js/interface";
import { IProps } from "@/components/SvgIcon/js/interface";
import SvgIcon from "@/components/SvgIcon";

export function Tabs (props) : ReactElement {
    const { tabClassName, tabStyle, TabChildren } = props

    return(
        <div
            className={ `tab ${tabClassName ? tabClassName: ''}` }
            style={ tabStyle }
        >
            <TabChildren />
        </div>
    )
}

export function TabContent (props) : ReactElement  {
    const {
        key,
        uid,
        name,
        icon,
        tabDetailStyle,
        tabDetailClassName,
        tabDetailTextClassName,
        onHover,
        onStart,
        closeTab,
        closeLocation,
        iconLocation,
    } : TabContentProps = props

    // 關閉按鈕觸發功能
    const closeProps = {
        iconName: 'close',
        svgProp: { width: 10, height: 10 },
        wrapperStyle: 'close-icon',
        darkTheme: '#5f6161|#000000',
        onStart: closeTab,
    } as IProps

    // 移動到Tab上觸發功能
    const hoverAction = (e) => {
        e['isHove'] = e._reactName === 'onMouseOver'
        e['tabContent'] = props
        if (onHover) onHover(e)
    }


    // 判斷關閉按鈕擺放位置,預設為後方
    const closeButton = !closeLocation && closeLocation !== undefined ? closeLocation === 'back' : true
    // 判斷icon擺放位置,預設為前方
    const iconLocationBoolean = !iconLocation && iconLocation !== undefined ? iconLocation === 'front' : true

    return(
        <>
            <div

                className={ `tab-detail ${ tabDetailClassName ? tabDetailClassName : ''}` }
                style={ tabDetailStyle }
                key={ `${uid}-${name}-${key}` }
                onClick={ onStart }
                onMouseOver={ hoverAction }
                onMouseLeave={ hoverAction }
            >
                <>{ !closeButton ? <SvgIcon {...closeProps} /> : null }</>
                <>{ icon && iconLocationBoolean  ? <SvgIcon {...icon} /> : null }</>
                <div className={`tab-detail-text ${ tabDetailTextClassName ? tabDetailTextClassName : '' }`}>{ name }</div>
                <>{ icon && !iconLocationBoolean ? <SvgIcon {...icon} /> : null }</>
                <>{ closeButton ?  <SvgIcon {...closeProps} /> : null }</>
            </div>
        </>
    )
}
