import React, { ReactElement } from "react";
import { TabProps } from "@/components/Tabs/js/interface";
import '@/css/components/Tab/index.scss'

function Tab (props: TabProps) {
    const { tabClassName, tabStyle, TabChildren } = props

    return(
        <div
            className={ `tab${tabClassName ? ` ${tabClassName}`: ''}` }
            style={ tabStyle }
        >
            { TabChildren === undefined ? null : <TabChildren /> }
        </div>
    )
}

export default Tab
