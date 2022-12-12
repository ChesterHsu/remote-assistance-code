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
[參考網址](https://dev.to/mondal10/dynamic-svg-component-in-vite-react-ts-3pih)

|     name     | type                                 | default | use                                     |
|:------------:|--------------------------------------|:-------:|:----------------------------------------|
|   iconName   | string                               |   ''    | 路徑 /src/icons/svg/ 底下的 file name        |
| wrapperStyle | string                               |   ''    | svg 的 Class Name                        |
|   svgProp    | Object<React.SVGProps<SVGSVGElement> |   {}    | Object參數 width、height、fill              |
|  darkTheme   | Boolean or String                    |  false  | 如果為參數true svg顏色會跟著預設dark模式去改變顏色         |

### SVG範例

#### 基本使用
````
組件使用：
將svg圖檔放入 /src/icons/svg/icon1

引入：
import SvgIcon from "@/tools/SvgIcon/index";

使用：
<SvgIcon iconName='icon1' />

層級資料夾使用
將svg圖檔放入 /src/icons/svg/dir/icon2

<SvgIcon iconName='dir-icon2' />

````
#### 顏色變化 （注意：若svg有多個色碼存在時,將無法改變顏色,為預防不必要錯誤）
````
<!-- svgProp 中帶入fill色碼即可改變svg顏色 --!>

<SvgIcon 
    iconName='icon1' 
    svgProp={{ fill: '#000' }} />

<!-- svgProp Dark 模式 當 darkTheme 給予值為true時會優先以 darkTheme 來去給值 --!>

<SvgIcon 
    iconName='icon1' 
    svgProp={{ fill: '#000' }}
    darkTheme={ true } />

<!-- darkTheme 按需改變 當不想依照store給定預設顏色時,可輸入dark以及 light 兩者分開則用用豎線分開--!>

<SvgIcon 
    iconName='icon1' 
    svgProp={{ fill: '#000' }}
    darkTheme={ "#1da7da|#e3e6e8" } />

````
