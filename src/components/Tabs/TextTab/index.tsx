import React, { lazy, Suspense, useState } from "react";

// i18n組件
import { useSelector } from "react-redux";
import { selectTranslations } from '@/store/slice/i18nSlice'
import {TabHeaderProps, TextTab} from "@/components/Tabs/js/interface";

const Tab = lazy(() => import('@/components/Tabs/Tab'))
const TabHeader = lazy(() => import('@/components/Tabs/TabHeader'))
const TextPopover = lazy(() => import('@/components/Popover/TextPopover'))

function ProjectTab(props) {
    // i18n
    const t = useSelector(selectTranslations);

    const Content = () => {
        return(
            <>
                { Object.entries(props).map(([key, projectTab ]) => {

                    const tabHeader =  projectTab as TextTab
                    let [showPopover, setShowPopover] = useState(false);
                    let [popoverMessage, setPopoverMessage] = useState('')

                    const onHover = (e) => {
                        setShowPopover(e.isHove)
                        setPopoverMessage(e.tabContent.patch)
                    }

                    // Tab Header Props
                    const tabHeaderProps = Object.assign(tabHeader as Object)
                    tabHeaderProps['onHover'] = onHover
                    tabHeaderProps['id'] = `${ tabHeader.text }-${ key }`


                    return(
                        <Suspense fallback={ <div>{ t.loading }</div> } key={ key }>
                            <TabHeader {...tabHeaderProps} />
                            <TextPopover
                                text={ popoverMessage }
                                open={ showPopover }
                                placement={'bottom'}
                                referenceID={ `${ tabHeaderProps['id'] }` }
                            />
                        </Suspense>
                    )
                })}
            </>
        )
    }

    // Tab的Props
    const TabProps = {
        TabChildren: Content
    }

    return(
        <Suspense fallback={ <div>{ t.loading }</div> }>
            <Tab { ...TabProps }></Tab>
        </Suspense>
    )
}

export default ProjectTab
