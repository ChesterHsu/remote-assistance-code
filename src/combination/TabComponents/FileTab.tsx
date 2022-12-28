import React, { lazy, Suspense, useState } from "react";
import '@/css/combination/TabComponents/index.scss'
import { TabHeaderProps, TabProps } from "@/components/Tabs/js/interface";
import { FileTabProps } from "@/combination/TabComponents/js/interface";
import { IconProps } from "@/components/SvgIcon/js/interface";
import { fileAnalyze } from "@/combination/TabComponents/js/fileAnalyze";
import { FileInformation, SvgPopoverProps, TextPopoverProps } from "@/combination/PopoverComponents/js/interface";

const Tab = lazy(() => import('@/components/Tabs/Tab'))
const TabHeader = lazy(() => import('@/components/Tabs/TabHeader'))
const SvgIcon = lazy(() => import('@/components/SvgIcon'))
const SvgPopover = lazy(() => import('@/combination/PopoverComponents/SvgPopover'))
const TextPopover = lazy(() => import('@/combination/PopoverComponents/TextPopover'))

// 取得 Popover
const GetPopover = (props : FileInformation, id, openPopover, popoverText = '') => {
    const { fileType } : FileInformation = props

    switch (fileType) {
        case 'svg':
            const svgPopoverProps : SvgPopoverProps = {
                referenceID: id,
                open: openPopover,
                placement: 'bottom',
                ...props
            }
            return (<SvgPopover {...svgPopoverProps}/>)
        default:

            const textPopoverProps : TextPopoverProps = {
                referenceID: id,
                open: openPopover,
                placement: 'bottom',
                text: popoverText
            }
            return (<TextPopover {...textPopoverProps} />)
    }

}

const Header = (props : FileTabProps, key) => {

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
        contentClassName: 'file-tab-header',
        contentStyle: {
            maxWidth: '200px',
            minWidth: '150px'
        },
        TextBack: CloseIcon,
        onHover: (e) => {
            setHover(e.isHove)
            setPopoverMessage(e.tabContent.webkitRelativePath)
        }
    }

    // Get Popover

    const Popover = () => {
        if (props.webkitRelativePath) {
            const fileInformation =  fileAnalyze(props)
            return GetPopover(fileInformation, tabId, hover, popoverMessage)
        } else {
            return null
        }

    }

    return(
        <>
            <Suspense fallback={ <div></div> }>
                <TabHeader {...headerProps}/>
                { Popover ? <Popover /> : null }
            </Suspense>
        </>
    )
}

function FileTab(props : Array<FileTabProps>) {

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
        tabClassName: 'file-tab',
        tabHeaderItemClassName: 'file-header-item',
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

export default FileTab
