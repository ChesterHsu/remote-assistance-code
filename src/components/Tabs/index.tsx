import '@/css/components/Tab/index.scss'
import { TabsProps } from "@/components/Tabs/js/interface";
import React from "react";
import SvgIcon from "@/components/SvgIcon";
import { IProps } from "@/components/SvgIcon/js/interface";
import '@/css/components/Tab/index.scss'

function TabDetail (props : [TabsProps]) : JSX.Element {


    return (
        <>
            {Object.entries(props).map(([key, tab]) => {

                const closeProps = {
                    iconName: 'close',
                    svgProp: { width: 10, height: 10 },
                    wrapperStyle: 'close-icon',
                    darkTheme: '#5f6161|#000000',
                    onStart: tab.closeTab,
                } as IProps

                const hoverAction = (e) => {
                    e['isHove'] = e._reactName === 'onMouseOver'
                    e['tabContent'] = tab
                    if (tab.onHover) tab.onHover(e)
                }

                const closeButton = !tab.closeLocation && tab.closeLocation !== undefined ? tab.closeLocation === 'back' : true
                const iconLocationBoolean = !tab.iconLocation && tab.iconLocation !== undefined ? tab.iconLocation === 'front' : true

                return(
                    <div
                        key={ `${tab.uid}-${key}` }
                        className={ `tab ${tab.tabClassName ? tab.tabClassName: ''}` }
                        style={ tab.tabStyle }
                    >
                        <div
                            className={ `tab-detail ${ tab.tabDetailClassName ? tab.tabDetailClassName : ''}` }
                            style={ tab.tabDetailStyle }
                            key={ `${tab.name}-${key}` }
                            onClick={ tab.onStart }
                            onMouseOver={ hoverAction }
                            onMouseLeave={ hoverAction }
                        >
                            <>{ !closeButton ? <SvgIcon {...closeProps} /> : null }</>
                            <>{ tab.icon && iconLocationBoolean  ? <SvgIcon {...tab.icon} /> : null }</>
                            <div className={`tab-detail-text`}>{ tab.name }</div>
                            <>{ tab.icon && !iconLocationBoolean ? <SvgIcon {...tab.icon} /> : null }</>
                            <>{ closeButton ?  <SvgIcon {...closeProps} /> : null }</>
                        </div>
                    </div>
                )
            })}
        </>
    )
}



function Tabs(props) {

    const hoveTest = (e) => {
        console.log(234234234, e)
    }

    const test = [{
        name: 'test',
        onHover: hoveTest
    }] as [TabsProps]


    return(
        <>
            { TabDetail ? <TabDetail{...test}/> : null }
        </>
    )
}

export default Tabs
