import React, { lazy, Suspense } from 'react';
import { TabProps } from '@/components/Tabs/js/interface';
import '@/css/combination/Header/index.scss';
import headerItem from '@/config/setting/headerItem.json'
import { useSelector } from "react-redux";
import { selectTranslations } from '@/store/slice/i18nSlice'


const Tab = lazy(() => import('@/components/Tabs/Tab'));
const TabHeader = lazy(() => import('@/components/Tabs/TabHeader'));

function Header() {

    const t = useSelector(selectTranslations);

    const getHeaderItem = Object.keys(headerItem)


    const TabHeaderItem = () => {
        return (
            <>
                {getHeaderItem.map((value, index) => {
                    const headerProps = {
                        id: value,
                        uid: `${value}-${index}`,
                        text: t[value],
                        index: String(index),
                        contentClassName: 'header-item',
                    };
                    return <TabHeader {...headerProps} key={ index }/>;
                })}
            </>
        );
    };

    const tabProps: TabProps = {
        tabClassName: 'header-core',
        TabHeader: TabHeaderItem
    };

    return (
        <>
            <Suspense fallback={<div></div>}>
                <Tab {...tabProps} />
            </Suspense>
        </>
    );
}

export default Header;
