import React from "react";
import { useDynamicSvgImport } from "./useDynamicSvgImport";
import { useSelector } from "react-redux";
import { theme } from '@/store/slice/themeSlice'

interface IProps {
    iconName: string;
    wrapperStyle?: string;
    svgProp?: React.SVGProps<SVGSVGElement>;
}

function SvgIcon(props: IProps) {
    const { darkMode, colors } = useSelector( theme );
    const { iconName, wrapperStyle, svgProp } = props;
    const { loading, SvgIcon } = useDynamicSvgImport(iconName);
    let svgStyle :  React.SVGProps<SVGSVGElement> = {
        fill: ''
    }


    // 黑暗模式切換,如果沒給預設顏色依據dark參數去變換svg顏色
    if (svgProp) {
        if (!svgProp.fill) {
            svgProp.fill = colors.svgFill
        }
        svgStyle = Object.assign(svgProp)
    } else {
        svgStyle.fill = colors.svgFill
    }

    return (
        <>
            {loading && (
                <div className="rounded-full bg-slate-400 animate-pulse h-8 w-8"></div>
            )}
            {SvgIcon && (
                <div className={ wrapperStyle }>
                    <SvgIcon {...svgStyle} />
                </div>
            )}
        </>
    );
}

export default SvgIcon;
