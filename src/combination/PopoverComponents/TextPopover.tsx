import { TextPopoverProps } from '@/combination/PopoverComponents/js/interface';
import React, { lazy } from 'react';
import '@/css/combination/PopoverComponents/index.scss';

const Popover = lazy(() => import('@/components/Popover'));

function TextPopover(props: TextPopoverProps) {
  const { text, TextPopoverClassName, open, referenceID, placement = 'bottom', spacing = 10 }: TextPopoverProps = props;

  const Children = () => {
    return <div className={`text-popover${TextPopoverClassName ? ` ${TextPopoverClassName}` : ''}`}>{text}</div>;
  };

  return (
    <>
      <Popover
        open={open}
        referenceID={referenceID}
        placement={placement}
        spacing={spacing}
        PopoverChildren={Children}
      ></Popover>
    </>
  );
}

export default TextPopover;
