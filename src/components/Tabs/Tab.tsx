import React from "react";
import { TabProps } from "@/components/Tabs/js/interface";
import '@/css/components/Tab/index.scss'

function Tab (props: TabProps) {

    const {
        tabClassName,
        TabHeader,
        TabContent
    } : TabProps = props

    return(
        <div className={ `tab${ tabClassName ? ` ${ tabClassName }`: ''}` }>
            <>
                { TabHeader === undefined ? null : <TabHeader /> }
            </>
            <>
                { TabContent === undefined ? null : <TabContent /> }
            </>
        </div>
    )
}

export default Tab
