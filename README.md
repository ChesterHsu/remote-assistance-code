# React + vite + TypeScript

## 建構指令

### Install
````
yarn install
````
### Run
````
yarn run dev
````
### Build
````
yarn build
````

### Test
````
yarn test
````

## 專案 Import Alias
````
'@': 'src'
'@pages':'src/pages'
'@assets':'src/assets',
'@comps': 'src/components',
'@utils': 'src/utils',
'@router': 'src/router',
'@store': 'src/store',
'@css': 'src/css',
'@tools: 'src/tools'
````

## 多國語言 i18n 
````
// 增加語言路徑 ：src/config/i18n/langs 

組件使用

import { useSelector } from "react-redux";
import { selectTranslations } from '@/store/slice/i18nSlice'

// ...

const t = useSelector(selectTranslations);
````

## Dark模式
````
// 取得當前模式

組件使用

import { useSelector } from "react-redux";
import { theme } from '@/store/slice/themeSlice'

// ...

const darkMode = useSelector( theme );
````

## Svg組件

````
使用 vite-plugin-svgr 參考網址如下：
https://dev.to/mondal10/dynamic-svg-component-in-vite-react-ts-3pih


組件使用

將svg圖檔放入 /src/iocns/svg/icon1

引入
import SvgIcon from "@/tools/SvgIcon/index";

使用
<SvgIcon 
    iconName='icon1' 
    svgProp={{ width: 100, height: 100, fill: '#61dafb' }}
/>

層級資料夾使用
範例：
/src/iocns/svg/dir/icon2

<SvgIcon 
    iconName='dir-icon2' 
    svgProp={{ width: 100, height: 100, fill: '#61dafb' }}
/>
````
