import React, { lazy, Suspense } from 'react';
import { FileTabProps, ProjectTabProps } from '@/combination/TabComponents/js/interface';
import '@/css/page/Home/index.scss'


const ProjectTab = lazy(() => import('@/combination/TabComponents/ProjectTab'))
const FileTab = lazy(() => import('@/combination/TabComponents/FileTab'))
const ScaleCard = lazy(() => import('@/components/ScaleCard'))

function Home() {
  // function empty(val) {
  //   console.log(val);
  // }
  //
  // const style = {
  //   uploadStyle: {
  //     // display: 'none',
  //   }
  // };
  // const start = (e) => {
  //   console.log(e);
  // };
  //
  // const props = {
  //   component: 'span',
  //   prefixCls: 'rc-js',
  //   data: {},
  //   style: style.uploadStyle,
  //   headers: {},
  //   name: 'file',
  //   multipart: false,
  //   onStart: start,
  //   onError: empty,
  //   onSuccess: empty,
  //   multiple: false,
  //   beforeUpload: null,
  //   customRequest: null,
  //   withCredentials: true,
  //   openFileDialogOnClick: true,
  //   directory: true
  // };
  //
  // // 切換Dark模式
  // const nowTheme = localStorage.getItem('now-theme');
  //
  // const dispatch = useDispatch();
  //
  // const lightTheme = () => {
  //   setAttribute('light');
  //   dispatch(setLightTheme());
  // };
  // const darkTheme = () => {
  //   setAttribute('dark');
  //   dispatch(setDarkTheme());
  // };
  //
  // const iconProps = {
  //   iconName: 'logo',
  //   darkTheme: '#1da7da|#e3e6e8'
  // };

  const projectTabProps: Array<ProjectTabProps> = [
    {
      uid: '324324',
      text: 'remote-assistance',
      patch: '~/Desk/project/remote-assistance'
    },
    {
      uid: '324324',
      text: 'remote-assistance',
      patch: '~/Desk/project/remote-assistance'
    }
  ];

  const fileTabProps: Array<FileTabProps> = [
    {
      uid: '452324',
      text: 'SvgPopover.tsx',
      webkitRelativePath: 'src/pages/Home/SvgPopover.tsx',
      fileSize: '210'
    },
    {
      uid: '85445',
      text: 'logo.svg',
      webkitRelativePath: 'src/icons/svg/logo.svg',
      fileSize: '410'
    }
  ];

  return (
    <>
      <Suspense>
        <ProjectTab {...projectTabProps} />
        <div className={ `main-content` }>
          <ScaleCard />
          <FileTab {...fileTabProps} />
        </div>
      </Suspense>
    </>
  );
}

export default Home;
