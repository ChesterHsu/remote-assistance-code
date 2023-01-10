import React, {lazy, Suspense, useState} from 'react';
import { TabProps } from '@/components/Tabs/js/interface';
import '@/css/combination/Header/index.scss';
import headerItem from '@/config/setting/headerItem.json'
import { useSelector } from "react-redux";
import { selectTranslations } from '@/store/slice/i18nSlice'


const Tab = lazy(() => import('@/components/Tabs/Tab'));
const TabHeader = lazy(() => import('@/components/Tabs/TabHeader'));
const OptionsPopover = lazy(() => import('@/combination/PopoverComponents/OptionsPopover'));

function Header() {

    const t = useSelector(selectTranslations);

    const getHeaderItem = Object.keys(headerItem)
    const [openPopover , setOpenPopover] = useState(false)
    const [popoverItem , setPopoverItem] = useState({})
    const [popoverID , setPopoverID] = useState('id')
    const tap = (e) => {
        setOpenPopover(!openPopover)
        setPopoverItem(headerItem[e.tabContent.id])
        setPopoverID(e.tabContent.id)
    }

    const popoverHover = (e) => {
      if (!e.isHove) setOpenPopover(false)
    }

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
                        onStart: tap
                    };
                    return <TabHeader {...headerProps} key={ index }/>;
                })}
                <OptionsPopover
                    open={ openPopover }
                    hover={ popoverHover }
                    referenceID={ popoverID }
                    options={ popoverItem }
                />
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
