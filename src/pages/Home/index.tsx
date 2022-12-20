import React, { lazy, Suspense }  from "react";
import UploadInput from '@/components/UploadInput/index'
import SvgIcon from "@/components/SvgIcon";
import {ProjectTabProps} from "@/components/Tabs/ProjectTab/js/interface";
const ProjectTab = lazy(() => import('@/components/Tabs/ProjectTab'))



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

    const projectProps = [
        {
            uid: '3423442',
            name: 'test',
            patch: 'src/pages/Home/index1.tsx',
        },
        {
            uid: '1212121',
            name: 'test2',
            patch: 'src/pages/Home/index2.tsx',
        },
        {
            uid: '1212121',
            name: 'test2234234234234',
            patch: 'src/pages/Home/index3.tsx',
        },
        {
            uid: '1212121121212121212121',
            name: 'test2',
            patch: 'src/pages/Home/index4.tsx',
        } as ProjectTabProps,
    ]

     return (
        <>
            <Suspense fallback={ <div>Loading...</div> }>
                <ProjectTab {...projectProps}></ProjectTab>
            </Suspense>
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
