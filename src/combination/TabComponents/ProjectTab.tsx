import React, { lazy, Suspense, useState } from "react";
import { TabHeaderProps, TabProps } from "@/components/Tabs/js/interface";
import '@/css/combination/TabComponents/index.scss'
import { IconProps } from "@/components/SvgIcon/js/interface";

const Tab = lazy(() => import('@/components/Tabs/Tab'))
const TabHeader = lazy(() => import('@/components/Tabs/TabHeader'))
const TextPopover = lazy(() => import('@/components/Popover/TextPopover'))
const SvgIcon = lazy(() => import('@/components/SvgIcon'))

const Header = (props : TabHeaderProps, key) => {
    let [hover, setHover] = useState(false);
    let [popoverMessage, setPopoverMessage] = useState('')

    const tabId = `${ props.uid }-${ key }`

    // Tab 關閉功能
    const CloseIcon = () => {
        const svgProps : IconProps = {
            iconName: 'close',
            wrapperClassName: 'close-icon',
            svgProp:{
                width: 10,
                height: 10,
                visibility: hover ? '' : 'hidden',
            },
            darkTheme: '#918E8E|#918E8E'
        }
        return (
            <SvgIcon {...svgProps} />
        )
    }

    // Tab Header Props
    const headerProps : TabHeaderProps = {
        ...props,
        id: tabId,
        text: '234234234234',
        contentClassName: 'project-tab-header',
        contentStyle: {
            maxWidth: '50%'
        },
        TextFont: CloseIcon,
        onHover: (e) => {
            setHover(e.isHove)
            setPopoverMessage(e.tabContent)
        }
    }

    return(
        <>
            <Suspense fallback={ <div></div> }>
                <TabHeader {...headerProps}/>
                <TextPopover
                    text={ popoverMessage }
                    open={ hover }
                    placement={'bottom'}
                    referenceID={ `${ tabId }` }
                />
            </Suspense>
        </>
    )
}

export default function ProjectTab(props) {

    const Content = () => {
        return(
            <>
                { Object.entries(props).map(([key, projectTab ]) => {
                    return Header(projectTab, key)
                })}
            </>
        )
    }



    const TabProps : TabProps = {
        tabClassName: 'project-tab',
        TabHeader: Header,
    }

    return(
        <>
            <Suspense fallback={ <div></div> }>
                <Tab {...TabProps}/>
            </Suspense>
        </>
    )
}
