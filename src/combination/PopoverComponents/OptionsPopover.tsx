import React, { lazy } from 'react';

const Popover = lazy(() => import('@/components/Popover'));

function OptionsPopover(props) {
    const {
        open,
        options,
        referenceID,
        hover
    } = props


    const Content = () => {
        return(
            <div className={ `options-popover` }>
                {
                    Object.entries(options).map(([key]) => {

                        const tap = (e) => {
                            const item = options[key]

                            const setUrl = `../../${item!.url.replace('.', '/') as string}`

                            import(setUrl)
                                .then((module) => {
                                    module[item.action]()
                                })
                        }

                        return(
                            <div className={ `options-item` } key={ key } onClick={ tap }>{ key }</div>
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
