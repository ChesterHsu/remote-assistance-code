import React, { lazy, Suspense }  from "react";
import UploadInput from '@/components/UploadInput/index'
import SvgIcon from "@/components/SvgIcon";
import { TextTab } from '@/components/Tabs/js/interface'
import { useDispatch } from "react-redux";
import { setDarkTheme, setLightTheme } from "@/store/slice/themeSlice";
import { setAttribute } from "@/tools/getTheme";
const ProjectTab = lazy(() => import('@/components/Tabs/TextTab'))



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



    const projectProps : Array<TextTab> = [
        {
            uid: '3423442',
            name: 'test',
            text: 'src/pages/Home/index1.tsx',
        },
        {
            uid: '1212121',
            name: 'test2',
            text: 'src/pages/Home/index2.tsx',
        },
        {
            uid: '1212121',
            name: 'test2234234234234',
            text: 'src/pages/Home/index3.tsx',
        },
        {
            uid: '1212121121212121212121',
            name: 'test2',
            text: 'src/pages/Home/index4.tsx',
        } as TextTab,
    ]

     return (
        <>
            <SvgIcon
                {...iconProps}
            />

            <Suspense fallback={ <div>Loading...</div> }>
                <ProjectTab {...projectProps}></ProjectTab>
            </Suspense>

            <UploadInput
                { ...props }
            />
            <div
                className={'switch-theme'}
                onClick={ nowTheme === 'dark' ? lightTheme : darkTheme }>
                切換Dark模式功能
            </div>
        </>
    )
}





export default Home
