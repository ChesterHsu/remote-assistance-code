import React, { lazy, Suspense } from 'react';
import { FileTabProps, ProjectTabProps } from '@/combination/TabComponents/js/interface';
import '@/css/page/Home/index.scss'


const ProjectTab = lazy(() => import('@/combination/TabComponents/ProjectTab'))
const FileTab = lazy(() => import('@/combination/TabComponents/FileTab'))
const ScaleCard = lazy(() => import('@/components/ScaleCard'))
const Header = lazy(() => import('@/combination/Header'))

function Home() {

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
        <Header />
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
