import React, { lazy } from 'react';

const Popover = lazy(() => import('@/components/Popover'));

function OptionsPopover(props) {
    const {
        open,
        options,
        referenceID,
        hover
    } = props

    Object.entries(options).map(([key, item]) => {
        console.log(key)
    })


    const Content = () => {
        return(
            <div className={ `options-popover` }>
                {
                    Object.entries(options).map(([key, item]) => {

                        // @ts-ignore
                        const setUrl = `../../${item!.url.replace('.', '/') as string}`

                        import(setUrl)
                            .then((module) => {
                                // @ts-ignore
                                console.log(module[item.action]())
                            })


                        return(
                            <div key={ key }>{ key }</div>
                        )
                    })
                }
            </div>
        )
    }


    return(
        // @ts-ignore
        <Popover
            open={ open }
            spacing={ 0 }
            placement={ `bottom-start` }
            referenceID={ referenceID }
            PopoverChildren={ Content }
            onHover={ hover }
        >
        </Popover>
    )
}

export default OptionsPopover
