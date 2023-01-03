import React from 'react';
import { TabProps } from '@/components/Tabs/js/interface';
import '@/css/components/Tab/index.scss';

function Tab(props: TabProps) {
  const { tabClassName, tabHeaderItemClassName, TabHeader, TabContent }: TabProps = props;

  return (
    <div className={`tab${tabClassName ? ` ${tabClassName}` : ''}`}>
      <div className={`tab-header-item${tabHeaderItemClassName ? ` ${tabHeaderItemClassName}` : ''}`}>
        {TabHeader === undefined ? null : <TabHeader />}
      </div>
      <>{TabContent === undefined ? null : <TabContent />}</>
    </div>
  );
}

export default Tab;
