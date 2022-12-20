import '@/css/components/Popover/index.scss'
import { PopoverMessage, PopoverProps } from "@/components/Popover/js/interface";
import React, { lazy } from "react";

const SvgPopover = lazy(() => import('@/components/Popover/components/SvgPopover'))

function Popover(props) {
    const {
        open,
        message,
        type,
        popoverStyle,
        popoverClassName,
    } : PopoverProps = props

    const SwitchContent = () => {
        const SvgPopoverProps : PopoverMessage = typeof message === 'object' ? Object.assign(message as PopoverMessage) : {}

        switch (type) {
            case 'svg':
                return (<SvgPopover {...SvgPopoverProps}/>)
            default:
                return (<>{ typeof message === 'string' ? message: '' }</>)
        }
    }


    return(
        <>
            { open ?
                <div
                    className={`popover${popoverClassName ? ` ${popoverClassName}` : ''}`}
                    style={ popoverStyle }
                >
                    <div className={`popover-content`}>
                        <SwitchContent />
                    </div>
                </div> : null
            }
        </>
    )
}

export default Popover
