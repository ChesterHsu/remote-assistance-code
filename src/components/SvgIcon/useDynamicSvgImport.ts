import React, { useEffect, useRef, useState } from "react";
import { isRepeat } from "@/tools/judge";

export function useDynamicSvgImport(iconName: string) {
    const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>();
    const fillRegex = /#[0-9a-f]{3,6}/gi

    const svgFill = {
        fill: String[''],
        repeat: Boolean,
    }

    useEffect(() => {

        setLoading(true);
        const importSvgIcon = async (): Promise<void> => {
            iconName = iconName.replace('-', '/')  // 替換檔案路徑
            try {
                importedIconRef.current = (
                    await import(`/src/icons/svg/${iconName}.svg`)
                ).ReactComponent;

                const fill = importedIconRef.current?.toString().match(fillRegex)
                svgFill.fill = fill
                svgFill.repeat = fill ? isRepeat(fill) : false

            } catch (err) {
                setError(err);
                console.error(err);
            } finally {
                setLoading(false);
            }
        };


        importSvgIcon();
    }, [iconName]);

    return { error, loading, SvgIcon: importedIconRef.current, svgFill};
}
