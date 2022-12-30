import { SvgPopoverProps } from "@/combination/PopoverComponents/js/interface";
import React, { lazy } from "react";
import { useSelector } from "react-redux";
import { selectTranslations } from "@/store/slice/i18nSlice";
import '@/css/combination/PopoverComponents/index.scss'
import { IconProps } from "@/components/SvgIcon/js/interface";

import SvgIcon from "@/components/SvgIcon";
import Popover from "@/components/Popover";
// const SvgIcon = lazy(() => import('@/components/SvgIcon'))
// const Popover = lazy(() => import('@/components/Popover'))



function SvgPopover(props: SvgPopoverProps) {

    const t = useSelector(selectTranslations);

    const {
        file,
        filePatch,
        fileSize,
        svgPopoverClassName,
        open,
        referenceID,
        placement = 'bottom',
        spacing = 10
    } : SvgPopoverProps = props

    const GetIcon = () => {
        const svgProps : IconProps = {
            iconName: 'logo',
            svgProp:{
                width: '100%',
                height: '100%',
            },
        }
        return (
            <SvgIcon {...svgProps} />
        )
    }

    const Children = () => {
        return (
            <div className={ `svg-popover${svgPopoverClassName ? ` ${svgPopoverClassName}` : ''}` }>
                <div className={ `row` }>
                    <div>{ t.file }：</div>
                    <div>{ file }</div>
                </div>
                <div className={ `row` }>
                    <div>{ t.fileSize }：</div>
                    <div>{ fileSize }</div>
                </div>
                <div className={ `row` }>
                    <div>{ t.filePath }：</div>
                    <div>{ filePatch }</div>

                </div>
                <div className={'show-img'}>
                    <GetIcon />
                </div>
            </div>
        )
    }

    return (
        <>
            <Popover
                open={ open }
                referenceID = { referenceID }
                placement = { placement }
                spacing={ spacing }
                PopoverChildren={ Children }
            ></Popover>
        </>
    )
}

export default SvgPopover

