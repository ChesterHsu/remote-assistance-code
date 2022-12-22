import { TextPopoverProps } from "@/components/Popover/js/interface";
import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { selectTranslations } from "@/store/slice/i18nSlice";
import '@/css/components/Popover/index.scss'

const Popover = lazy(() => import('@/components/Popover/index'))

function TextPopover(props: TextPopoverProps) {

    const t = useSelector(selectTranslations);

    const {
        text,
        TextPopoverClassName,
        open,
        referenceID,
        placement = 'bottom',
        spacing = 10
    } : TextPopoverProps = props

    const Children = () => {
        return (
            <div className={ `text-popover${TextPopoverClassName ? ` ${TextPopoverClassName}` : ''}` }>
                { text }
            </div>
        )
    }

    return (
        <Suspense fallback={ <div>{ t.loading }</div> } >
            <Popover
                open={ open }
                referenceID = { referenceID }
                placement = { placement }
                spacing={ spacing }
                PopoverChildren={ Children }
            ></Popover>
        </Suspense>
    )
}

export default TextPopover
