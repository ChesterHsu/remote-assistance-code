import React, { lazy, Suspense }  from "react";
import UploadInput from '@/components/UploadInput/index'
import SvgIcon from "@/components/SvgIcon";
import {FileTabProps, TextTabProps} from '@/components/Tabs/js/interface'
import { useDispatch } from "react-redux";
import { setDarkTheme, setLightTheme } from "@/store/slice/themeSlice";
import { setAttribute } from "@/tools/getTheme";

const TextTab = lazy(() => import('@/components/Tabs/TextTab'))
const FilesTab = lazy(() => import('@/components/Tabs/FilesTab'))



function Home() {

    function empty(val) { console.log(val) }

    const style = {
        uploadStyle: {
            // display: 'none',
        }
    }
    const start = (e) => {
      console.log(e)
    }

    const props = {
        component: 'span',
        prefixCls: 'rc-js',
        data: {},
        style: style.uploadStyle,
        headers: {},
        name: 'file',
        multipart: false,
        onStart: start,
        onError: empty,
        onSuccess: empty,
        multiple: false,
        beforeUpload: null,
        customRequest: null,
        withCredentials: true,
        openFileDialogOnClick: true,
        directory: true,
    };

    // 切換Dark模式
    const nowTheme = localStorage.getItem('now-theme')

    const dispatch = useDispatch();

    const lightTheme = () => {
        setAttribute('light')
        dispatch(setLightTheme());
    }
    const darkTheme = () => {
        setAttribute('dark')
        dispatch(setDarkTheme());
    }

    const iconProps = {
        iconName: 'logo',
        darkTheme: '#1da7da|#e3e6e8'
    }



    const projectProps : Array<TextTabProps> = [
        {
            uid: '3423442',
            name: 'test',
            popoverMessage: 'src/pages/Home/index1.tsx',
        },
        {
            uid: '1212121',
            name: 'test2',
            popoverMessage: 'src/pages/Home/index2.tsx',
        },
        {
            uid: '1212121',
            name: 'test2234234234234',
            popoverMessage: 'src/pages/Home/index3.tsx',
        },
        {
            uid: '1212121121212121212121',
            name: 'test2',
            popoverMessage: 'src/pages/Home/index4.tsx',
        } as TextTabProps,
    ]

    const fileTabProps : Array<FileTabProps> = [
        {
            uid: '3423442',
            name: 'chester1',
            popoverMessage: 'src/icons/svg/logo.svg',
            webkitRelativePath: 'src/icons/svg/logo.svg',
            fileSize: '211',
        },
        {
            uid: '1212121',
            name: 'chester2',
            popoverMessage: 'src/pages/Home/index2.tsx',
            webkitRelativePath: 'src/pages/Home/index1.tsx',
            fileSize: '211',
        },
        {
            uid: '1212121',
            name: 'chester3',
            popoverMessage: 'src/pages/Home/index3.tsx',
            webkitRelativePath: 'src/pages/Home/index1.tsx',
            fileSize: '211',
        },
        {
            uid: '1212121121212121212121',
            name: 'chester4',
            popoverMessage: 'src/pages/Home/index4.tsx',
            webkitRelativePath: 'src/pages/Home/index1.tsx',
            fileSize: '211',
        },
    ]

     return (
        <>
            <SvgIcon
                {...iconProps}
            />

            <Suspense fallback={ <div>Loading...</div> }>
                <TextTab {...projectProps} />
            </Suspense>

            <UploadInput
                { ...props }
            />
            <div
                className={'switch-theme'}
                onClick={ nowTheme === 'dark' ? lightTheme : darkTheme }>
                切換Dark模式功能
            </div>

            <Suspense fallback={ <div>Loading...</div> }>
                <FilesTab {...fileTabProps} />
            </Suspense>


        </>
    )
}





export default Home
