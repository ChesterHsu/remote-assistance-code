import React, {lazy, Suspense, useState} from "react";
import { useSelector } from "react-redux";
import { selectTranslations } from "@/store/slice/i18nSlice";
import { FileTab } from "@/components/Tabs/js/interface";
import {FileInformation, FileValue} from "@/tools/js/interface";
import { fileAnalyze } from "@/tools/analyze";
import {SvgPopoverProps} from "@/components/Popover/js/interface";

const Tab = lazy(() => import('@/components/Tabs/Tab'))
const TabHeader = lazy(() => import('@/components/Tabs/TabHeader'))
const SvgPopover = lazy(() => import('@/components/Popover/SvgPopover'))

function FilesTab(props) {
    const {} = props
    const t = useSelector(selectTranslations);

    const Content = () => {
        return(
            <>
                { Object.entries(props).map(([key, fileTab ]) => {

                    const tabHeader =  fileTab as FileTab
                    let [showPopover, setShowPopover] = useState(false);
                    let [popoverMessage, setPopoverMessage] = useState('')

                    const onHover = (e) => {
                        setShowPopover(e.isHove)
                        setPopoverMessage(e.tabContent.text)
                    }

                    const SvgProps : SvgPopoverProps = {
                        open: showPopover,
                        referenceID: `${tabHeader.name}-${key}`,
                        file: '',
                        fileSize: '',
                        fileType: '',
                        filePatch: ''

                    }

                    // Tab Header Props
                    const tabHeaderProps = Object.assign(tabHeader as Object)
                    tabHeaderProps['onHover'] = onHover
                    tabHeaderProps['id'] = `${ tabHeader.name }-${ key }`





                    return(
                        <Suspense fallback={ <div>{ t.loading }</div> } key={ key }>
                            <TabHeader {...tabHeaderProps} />
                            <SvgPopover {...SvgProps}></SvgPopover>
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
