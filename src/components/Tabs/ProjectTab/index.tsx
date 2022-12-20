import React, {lazy, Suspense, useState} from "react";
// i18n組件
import { useSelector } from "react-redux";
import { selectTranslations } from '@/store/slice/i18nSlice'

const Tab = lazy(() => import('@/components/Tabs/Tab'))
const TabHeader = lazy(() => import('@/components/Tabs/TabHeader'))
const Popover = lazy(() => import('@/components/Popover/index'))

function ProjectTab(props) {
    // i18n
    const t = useSelector(selectTranslations);

    const Content = () => {
        return(
            <>
                { Object.entries(props).map(([key, projectTab]) => {

                    let [showPopover, setShowPopover] = useState(false);
                    let [popoverMessage, setPopoverMessage] = useState('')

                    const onHover = (e) => {
                        setShowPopover(e.isHove)
                        setPopoverMessage(e.tabContent.patch)
                    }

                    // Tab Header Props
                    const tabHeaderProps = Object.assign(projectTab as Object)
                    tabHeaderProps['onHover'] = onHover

                    return(
                        <Suspense fallback={ <div>{ t.loading }</div> } key={ key }>
                            <Popover
                                open={ showPopover }
                                message={ popoverMessage }
                            />
                            <TabHeader {...tabHeaderProps} />
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
