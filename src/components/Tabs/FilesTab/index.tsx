import React, {lazy, Suspense, useState} from "react";
import { useSelector } from "react-redux";
import { selectTranslations } from "@/store/slice/i18nSlice";
import { FileInformation, FileTab, FileValue } from "@/components/Tabs/js/interface";
import { fileAnalyze } from "@/components/Tabs/FilesTab/js/analyze";
import { SvgPopoverProps } from "@/components/Popover/js/interface";

const Tab = lazy(() => import('@/components/Tabs/Tab'))
const TabHeader = lazy(() => import('@/components/Tabs/TabHeader'))

function FilesTab(props : [ FileTab ]) {
    const {} = props
    const t = useSelector(selectTranslations);

    const Content = () => {
        return(
            <>
                { Object.entries(props).map(([key, fileTab ]) => {

                    const {
                        webkitRelativePath,
                        fileSize,
                        uid,
                        name,
                        onStart,
                        fileTabClassName,
                    } : FileTab = fileTab

                    const setId = `${ name }-${ key }`

                    let [open, setOpen] = useState(false);
                    let [text, setText] = useState('')

                    const fileValue : FileValue = { webkitRelativePath, fileSize }

                    const file : FileInformation = fileAnalyze(fileValue)

                    // Tab Header Props
                    const onHover = (e) => {
                        setOpen(e.isHove)
                        setText(e.tabContent.text)
                    }

                    // Svg Popover
                    const SvgProps : SvgPopoverProps = {
                        open,
                        referenceID: setId,
                        ...file
                    }


                    const tabHeaderProps = {
                        id: setId,
                        uid,
                        name,
                        onStart,
                        onHover,
                    }

                    return(
                        <Suspense fallback={ <div>{ t.loading }</div> } key={ key }>
                            <div className={ `${ fileTabClassName }` }>
                                <TabHeader {...tabHeaderProps} />
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
