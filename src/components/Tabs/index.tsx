import '@/css/components/Tab/index.scss'
import { TabsProps } from "@/components/Tabs/js/interface";
import React from "react";
import SvgIcon, { IProps } from "@/components/SvgIcon";
import '@/css/components/Tab/index.scss'

function TabDetail (props : [TabsProps]) : JSX.Element {

    const closeProps = {
        iconName: 'close',
        svgProp: { width: 10, height: 10 },
        wrapperStyle: 'close-icon',
        darkTheme: '#5f6161|#000000',
        onStart: close,
    } as IProps

    function close() {

    }

    return (
        <>
            {Object.entries(props).map(([key, tab]) => {
                return(
                    <div
                        key={ `${tab.uid}-${key}` }
                        className={ `tab ${tab.tabClassName ? tab.tabClassName: ''}` }
                    >
                        <div
                            className={ `tab-detail ${ tab.tabDetailClassName ? tab.tabDetailClassName : ''}` }
                            key={ `${tab.fileName}-${key}` }
                            onClick={ tab.onStart }
                            onMouseOver={ tab.onHover }
                        >
                            <>{ tab.closeLocation === 'front' ? <SvgIcon {...closeProps} /> : null }</>
                            <>{ tab.icon ? <SvgIcon {...tab.icon} /> : null }</>
                            <div className={`tab-detail-text`}>{ tab.fileName }</div>
                            <>{ tab.closeLocation === 'back' ?  <SvgIcon {...closeProps} /> : null }</>
                        </div>
                    </div>
                )
            })}
        </>
    )
}



function Tabs(props) {
    const test = [{
        fileName: 'test',
        closeLocation: 'back'
    }] as [TabsProps]

    return(
        <>
            { TabDetail ? <TabDetail{...test}/> : null }
        </>
    )
}

export default Tabs
