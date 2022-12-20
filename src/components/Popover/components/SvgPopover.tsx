import { PopoverMessage } from "@/components/Popover/js/interface";

function SvgPopover(props : PopoverMessage) {

    const {
        fileName,
        fileSize,
        filePatch,
    } = props

    return (
        <div className={ `svg-popover` }>
            <div>檔案： { fileName }</div>
            <div>大小： { fileSize }</div>
            <div>路徑： { filePatch }</div>
        </div>
    )
}

export default SvgPopover
