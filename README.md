# React + vite

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
'@tool
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
