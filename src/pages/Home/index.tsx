import React from "react";
import UploadInput from '@/components/UploadInput/index'
import { useSelector } from "react-redux";
import { theme } from '@/store/slice/themeSlice'
import SvgIcon from "@/components/SvgIcon";

function Home() {


    function empty(val) { console.log(val) }

    const darkMode = useSelector( theme );


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

    return (
        <div>
            <SvgIcon
                iconName='logo'
            />
            <UploadInput { ...props } />
        </div>
    )
}





export default Home
