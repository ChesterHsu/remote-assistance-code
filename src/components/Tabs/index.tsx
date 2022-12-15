import '@/css/components/Tab/index.scss'
import { TabsProps } from "@/components/Tabs/js/interface";
import React from "react";
import SvgIcon from "@/components/SvgIcon";
import '@/css/components/Tab/index.scss'

function TabDetail (props : [TabsProps]) : JSX.Element {
    return (
        <>
            {Object.entries(props).map(([key, tab]) => {
                return(
                    <div
                        key={ `${tab.uid}-${key}` }
                        className={ `tab ${tab.tabClassName}` }
                    >
                        { tab.icon ? <SvgIcon {...tab.icon} key={ `${tab.icon}-${key}` }/> : null }
                        <div
                            key={ `${tab.fileName}-${key}` }
                            onClick={ tab.onStart }
                            onMouseOver={ tab.onHover }
                        >{ tab.fileName }</div>
                    </div>
                )
            })}
        </>
    )
}



function Tabs(props) {
    const test = [{
        fileName: 'test',
    }] as [TabsProps]

    return(
        <>
            { TabDetail ? <TabDetail{...test}/> : null }
        </>
    )
}

export default Tabs
