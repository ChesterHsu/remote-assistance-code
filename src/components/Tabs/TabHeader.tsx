import React from 'react';
import { TabHeaderProps } from '@/components/Tabs/js/interface';

export default function TabHeader(props: TabHeaderProps) {
  const {
    id,
    text,
    contentStyle,
    contentClassName,
    textClassName,
    TextFont,
    TextBack,
    onHover,
    onStart
  }: TabHeaderProps = props;

  // 移動到Tab上觸發功能
  const hoverAction = (e) => {
    e['isHove'] = e._reactName === 'onMouseOver';
    e['tabContent'] = props;
    if (onHover) onHover(e);
  };

  return (
    <div
      id={`${id}`}
      className={`content${contentClassName ? ` ${contentClassName}` : ''}`}
      style={contentStyle}
      onClick={onStart}
      onMouseOver={hoverAction}
      onMouseLeave={hoverAction}
    >
      {TextFont === undefined ? null : <TextFont />}
      <div className={`text${textClassName ? ` ${textClassName}` : ''}`}>{text}</div>
      {TextBack === undefined ? null : <TextBack />}
    </div>
  );
}
