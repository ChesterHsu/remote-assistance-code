import '@/css/components/Popover/index.scss'

function Popover(props) {
    const {
        open,
        message,
        popoverStyle,
        popoverClassName,
    } = props

    const PopoverContent = () => {
        return (
            <>
                <div>{ message }</div>
            </>
        )
    }

    return(
        <div
            className={`popover${popoverClassName ? ` ${popoverClassName}` : ''}`}
            style={ popoverStyle }
        >
            {open ? <PopoverContent /> : null}
        </div>
    )
}

export default Popover
