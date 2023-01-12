import React from 'react';
import { PopoverProps } from '@/components/Popover/js/interface';

function Popover(props: PopoverProps) {
  const {
    open,
    referenceID,
    placement = 'bottom',
    spacing = 10,
    PopoverChildren,
    popoverClassName,
    onHover
  }: PopoverProps = props;

  const popoverID = `${referenceID}-popover`;

  // 取得需綁定元件的ID
  const referenceElement = document.querySelector(`#${referenceID}`);

  // 初始值
  let left: number = 0;
  let top: number = 0;
  let width: number = 0;
  let height: number = 0;
  let popoverWidth: number = 0;
  let popoverHeight: number = 0;

  // 取得綁定元素的參數
  if (referenceElement instanceof HTMLElement) {
    const widthStr = window.getComputedStyle(referenceElement).width;
    const heightStr = window.getComputedStyle(referenceElement).height;
    left = referenceElement.offsetLeft;
    top = referenceElement.offsetTop;
    width = parseFloat(widthStr);
    height = parseFloat(heightStr);
  }

  // 取得 Popover 元素
  const popoverElement = document.querySelector(`#${popoverID}`);

  // 取得 Popover 元素大小
  if (popoverElement instanceof HTMLElement) {
    const widthStr = window.getComputedStyle(popoverElement).width;
    const heightStr = window.getComputedStyle(popoverElement).height;
    popoverWidth = parseFloat(widthStr);
    popoverHeight = parseFloat(heightStr);
  }

  // 計算 Popover 位置
  switch (placement) {
    case 'top':
      top = top - popoverHeight - spacing;
      left = left + width / 2;
      break;
    case 'top-start':
      top = top - popoverHeight - spacing;
      break;
    case 'top-end':
      top = top - popoverHeight - spacing;
      left = left + width;
      break;
    case 'right':
      left = left + width + spacing;
      top = top + height / 2;
      break;
    case 'right-start':
      left = left + width + spacing;
      top = top - height;
      break;
    case 'right-end':
      left = left + width + spacing;
      top = top + height + spacing;
      break;
    case 'bottom':
      top = top + height + spacing;
      left = left + width / 2;
      break;
    case 'bottom-start':
      top = top + height + spacing;
      break;
    case 'bottom-end':
      top = top + height + spacing;
      left = left + width;
      break;
    case 'left':
      left = left - popoverWidth - spacing;
      top = top + height / 2;
      break;
    case 'left-start':
      left = left - popoverWidth - spacing;
      top = top - height;
      break;
    case 'left-end':
      left = left - popoverWidth - spacing;
      top = top + height + spacing;
      break;
  }

  const style = {
    popoverStyle: {
      position: 'absolute',
      inset: '0 auto auto 0',
      margin: '0px',
      transform: `translate(${left}px, ${top}px)`,
      visibility: `${open ? '' : 'hidden'}` as string,
      zIndex: 10
    }
  };

  const hoverAction = (e) => {
    e['isHove'] = e._reactName === 'onMouseOver';
    if (onHover) onHover(e);
  };

  const Children = () => {
    return (
      <div
        id={popoverID}
        className={`popover${popoverClassName ? ` ${popoverClassName}` : ''}`}
        style={style.popoverStyle as React.CSSProperties}
        onMouseOver={ hoverAction }
        onMouseLeave={ hoverAction }
      >
        {PopoverChildren === undefined ? null : <PopoverChildren />}
      </div>
    );
  };

  return (
    <>
      <Children />
    </>
  );
}

export default Popover;
