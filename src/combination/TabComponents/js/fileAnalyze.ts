import { FileValue } from "@/combination/TabComponents/js/interface";
import { FileInformation } from "@/combination/PopoverComponents/js/interface";

export function fileAnalyze(props : FileValue) : FileInformation {
    const {
        fileSize,
        webkitRelativePath,
    } : FileValue = props

    const cutDot = webkitRelativePath.split('.')
    const cutSlash = webkitRelativePath.split('/')
    const slashLength = cutSlash.length

    const fileInformation = {
        file: cutSlash[slashLength - 1],
        fileSize: fileSize,
        fileType: cutDot[1],
        filePatch: webkitRelativePath,
    } as FileInformation

    return fileInformation
}
