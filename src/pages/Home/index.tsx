import React from "react";
import UploadInput from '@/components/UploadInput/index'
import SvgIcon from "@/components/SvgIcon";
import Tabs from "@/components/Tabs";
import {TabsProps} from "@/components/Tabs/js/interface";


function Home() {

    function empty(val) { console.log(val) }

    const style = {
        uploadStyle: {
            // display: 'none',
        }
    }

    const props = {
        component: 'span',
        prefixCls: 'rc-js',
        data: {},
        style: style.uploadStyle,
        headers: {},
        name: 'file',
        multipart: false,
        onStart: empty,
        onError: empty,
        onSuccess: empty,
        multiple: false,
        beforeUpload: null,
        customRequest: null,
        withCredentials: true,
        openFileDialogOnClick: true,
        directory: true,
    };
    const iconProps = {
        iconName: 'logo',
        darkTheme: '#1da7da|#e3e6e8'
    }

    const hoveTest = (e) => {
        console.log(234234234, e)
    }

    const tabProps = [{
        name: 'test',
        onHover: hoveTest
    }] as [TabsProps]

     return (
        <>
            <Tabs {...tabProps}></Tabs>
            <SvgIcon
                {...iconProps}
            />
            <UploadInput
                { ...props }
            />
        </>
    )
}





export default Home
