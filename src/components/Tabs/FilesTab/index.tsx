import React, { lazy, Suspense, useState } from "react";
import { useSelector } from "react-redux";
import { selectTranslations } from "@/store/slice/i18nSlice";
import { FileInformation, FileTabProps, FileValue } from "@/components/Tabs/js/interface";
import { fileAnalyze } from "@/components/Tabs/FilesTab/js/analyze";
import { SvgPopoverProps, TextPopoverProps } from "@/components/Popover/js/interface";

const Tab = lazy(() => import('@/components/Tabs/Tab'))
const TabHeader = lazy(() => import('@/components/Tabs/TabHeader'))
const SvgPopover = lazy(() => import('@/components/Popover/SvgPopover'))
const TextPopover = lazy(() => import('@/components/Popover/TextPopover'))

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

function FilesTab(props : Array<FileTabProps>) {

    const t = useSelector(selectTranslations);

    const Content = () => {
        return(
            <>
                { Object.entries(props).map(([key, fileTab ]) => {

                    const {
                        webkitRelativePath,
                        fileSize,
                        name,
                        onStart,
                        fileTabClassName,
                    } : FileTabProps = fileTab

                    // 統整file 需要參數
                    const fileValue : FileValue = {
                        webkitRelativePath,
                        fileSize
                    }

                    const fileInformation : FileInformation = fileAnalyze(fileValue)

                    const setId = `${ name }-${ key }`

                    let [showPopover, setShowPopover] = useState(false);
                    let [popoverMessage, setPopoverMessage] = useState('')

                    const onHover = (e) => {
                        setShowPopover(e.isHove)
                        setPopoverMessage(e.tabContent.popoverMessage)
                    }

                    const tabHeaderProps = {
                        id: setId,
                        onStart,
                        onHover,
                        ...fileTab,
                    }

                    const Popover = () => {
                        return GetPopover(fileInformation, setId, showPopover, popoverMessage)
                    }

                    return(
                        <Suspense fallback={ <div>{ t.loading }</div> } key={ key }>
                            <div className={ `${ fileTabClassName }` }>
                                <TabHeader {...tabHeaderProps} />
                                <Popover />
                            </div>
                        </Suspense>
                    )
                })}
            </>
        )
    }

    const TabProps = {
        TabChildren: Content
    }

    return(
        <Suspense fallback={ <div>{ t.loading }</div> }>
            <Tab { ...TabProps }></Tab>
        </Suspense>
    )
}

export default FilesTab
