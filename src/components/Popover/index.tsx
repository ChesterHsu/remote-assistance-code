import '@/css/components/Popover/index.scss'

function Popover(props) {
    const {
        open,
        message,
        popoverStyle,
        popoverClassName,
    } = props

    return(
        <>
            { open ?
                <div
                    className={`popover${popoverClassName ? ` ${popoverClassName}` : ''}`}
                    style={ popoverStyle }
                >
                    <div className={`popover-content`}>{ message }</div>
                </div> : null
            }
        </>
    )
}

export default Popover
