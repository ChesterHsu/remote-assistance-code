import '@/css/components/Popover/index.scss'
import { PopoverProps } from "@/components/Popover/js/interface";


function Popover(this: any, props) {
    const {
        open,
        followID,
        PopoverChildren,
        popoverClassName,
    } : PopoverProps = props

    // 取得需綁定元件的ID
    const followElement = document.querySelector(`#${followID}`);
    const numberRe = new RegExp(/^[0-9]+(.[0-9]{2})?$/g)

    // 初始值
    let left : number = 0
    let top : number = 0
    let width: number = 0
    let height : number = 0


    // 取得綁定元素的參數
    if (followElement instanceof HTMLElement) {
        const widthStr = window.getComputedStyle(followElement).width
        const heightStr = window.getComputedStyle(followElement).height
        left = followElement.offsetLeft
        top = followElement.offsetTop
        width = parseFloat(widthStr)
        height = parseFloat(heightStr)
    }

    const style = {
        popoverStyle: {
            transform: `translate(${left}px, ${top}px)`
        }
    }

    return(
        <>
            { open ?
                <div
                    className={`popover${popoverClassName ? ` ${popoverClassName}` : ''}`}
                    style={ style.popoverStyle }
                >
                    { PopoverChildren === undefined ? null : <PopoverChildren /> }
                </div> : null
            }
        </>
    )
}

export default Popover
