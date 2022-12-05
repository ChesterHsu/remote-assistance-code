import React, { useEffect, useRef, useState } from "react";

export function useDynamicSvgImport(iconName: string) {
    const importedIconRef = useRef<React.FC<React.SVGProps<SVGElement>>>();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<unknown>();

    useEffect(() => {
        setLoading(true);
        const importSvgIcon = async (): Promise<void> => {
            iconName = iconName.replace('-', '/')  // 替換檔案路徑
            try {
                importedIconRef.current = (
                    await import(`/src/icons/svg/${iconName}.svg`)
                ).ReactComponent;
            } catch (err) {
                setError(err);
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        importSvgIcon();
    }, [iconName]);

    return { error, loading, SvgIcon: importedIconRef.current };
}
