import React, { lazy, Suspense, useState } from "react";
import { TabHeaderProps, TabProps } from "@/components/Tabs/js/interface";
import '@/css/combination/TabComponents/index.scss'
import { IconProps } from "@/components/SvgIcon/js/interface";
import { ProjectTabProps } from "@/combination/TabComponents/js/interface";

const Tab = lazy(() => import('@/components/Tabs/Tab'))
const TabHeader = lazy(() => import('@/components/Tabs/TabHeader'))
const TextPopover = lazy(() => import('@/combination/PopoverComponents/TextPopover'))
const SvgIcon = lazy(() => import('@/components/SvgIcon'))

const Header = (props : TabHeaderProps) => {
    let [hover, setHover] = useState(false);
    let [popoverMessage, setPopoverMessage] = useState('')

    // 預設ID 為防止ID值開頭為英文
    const tabId = `p${ props.uid }-${ props.index }`

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
        contentClassName: 'project-tab-header',
        contentStyle: {
            minWidth: `${ 100 /2 }%`
        },
        TextFont: CloseIcon,
        onHover: (e) => {
            setHover(e.isHove)
            setPopoverMessage(e.tabContent.patch)
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

export default function ProjectTab(props : Array<ProjectTabProps>) {

    const HeaderItem = () => {

        return(
            <>
                { Object.entries(props).map(([key, projectTab ]) => {
                    const headerProps = {
                        index: key,
                        ...projectTab
                    }
                    return (<Header {...headerProps} key={ key }/>)
                })}
            </>
        )
    }

    const tabProps : TabProps = {
        tabClassName: 'project-tab',
        TabHeader: HeaderItem,
    }

    return(
        <>
            <Suspense fallback={ <div></div> }>
                <Tab {...tabProps} />
            </Suspense>
        </>
    )
}
