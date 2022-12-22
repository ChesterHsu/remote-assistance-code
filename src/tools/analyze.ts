import {FileInformation, FileValue} from "@/tools/js/interface";
import { SvgPopoverProps } from "@/components/Popover/js/interface";

export function fileAnalyze(props : FileValue) : FileInformation {
    const {
        size,
        webkitRelativePath,
    } : FileValue = props

    const cutDot = webkitRelativePath.split('.')
    const cutSlash = webkitRelativePath.split('/')
    const slashLength = cutSlash.length


    const fileInformation = {
        file: cutSlash[slashLength - 1],
        fileSize: size,
        fileType: cutDot[1],
        filePatch: webkitRelativePath,
    } as SvgPopoverProps

    return fileInformation
}
