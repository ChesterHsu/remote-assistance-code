import React from "react";
import UploadInput from '@/components/UploadInput/index'
import {useSelector} from "react-redux";


function Home() {

    function empty(val) { console.log(val) }

    // @ts-ignore
    const darkMode = useSelector((state) => state.theme.darkMode);

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

    console.log(234234234234, darkMode)

    return (
        <div>
            <UploadInput { ...props } />
        </div>
    )
}





export default Home
