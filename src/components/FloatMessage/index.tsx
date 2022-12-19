import '@/css/components/FloatMessage/index.scss'

function FloatMessage(props) {
    const {
        message,
        messageStyle,
        messageClassName,
    } = props

    return(
        <div className={`float-message`}>
            { message }
        </div>
    )
}

export default FloatMessage
