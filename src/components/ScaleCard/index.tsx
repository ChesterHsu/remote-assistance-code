import '@/css/components/ScaleCard/index.scss'

function ScaleCard () {
    return(
        <div className={ 'scale' }>
            <div className={ 'resizable' }></div>
            <div className={ `scale-content` }></div>
        </div>

    )
}

export default ScaleCard
