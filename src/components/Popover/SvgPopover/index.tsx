import { SvgPopoverProps } from "@/components/Popover/js/interface";
import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import { selectTranslations } from "@/store/slice/i18nSlice";
import '@/css/components/Popover/index.scss'

const Popover = lazy(() => import('@/components/Popover/index'))

function SvgPopover(props: SvgPopoverProps) {

    const t = useSelector(selectTranslations);

    const {
        file,
        fileSize,
        filePatch,
        svgPopoverClassName,
        open,
        referenceID,
        placement = 'bottom',
        spacing = 10
    } : SvgPopoverProps = props

    const Children = () => {
        return (
            <div className={ `svg-popover${svgPopoverClassName ? ` ${svgPopoverClassName}` : ''}` }>
                <div className={ `row` }>
                    <div>{ t.file }</div>
                    <div>{ file }</div>
                </div>
                <div className={ `row` }>
                    <div>{ t.fileSize }</div>
                    <div>{ fileSize }</div>
                </div>
                <div className={ `row` }>
                    <div>{ t.filePath }</div>
                    <div>{ filePatch }</div>
                </div>
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

export default SvgPopover

