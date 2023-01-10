import React, {lazy, Suspense} from "react";
import {TabProps} from "@/components/Tabs/js/interface";
import '@/css/combination/Header/index.scss'

const Tab = lazy(() => import('@/components/Tabs/Tab'))
const TabHeader = lazy(() => import('@/components/Tabs/TabHeader'))

function Header() {

    const tabProps: TabProps = {
        tabClassName: 'header-core',
    };

    return (
        <>
            <Suspense fallback={<div></div>}>
                <Tab {...tabProps} />
            </Suspense>
        </>
    );
}

export default Header
