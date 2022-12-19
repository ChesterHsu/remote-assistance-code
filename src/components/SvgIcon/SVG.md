## SvgIcon Api

## IProps

以下星號（*）為必填

### *iconName
```

抓取路徑： /src/icons/svg 底下的 icon

範例： /src/icons/svg/icon1

iconName: 'icon1'

```

### wrapperStyle
```
icon外層的style
```

### svgProp
```
傳入參數為Object,格式如下:

width: 寬度, 
height: 高度,
fill: 改變svg顏色,這邊需要注意,若svg有兩種（含）以上色碼,將不能改變顏色,為防止不必要錯誤
```

### darkTheme
```
預設為false

在true情況下,會去取得 src/store/slice/themeSlice.ts 中 svgFill 參數
來進行切換icon顏色

也可以傳入string 格式如下
darkTheme: '#5f6161|#000000'
豎線前為dark模式下的色碼
豎線後為light模式下的色碼

同理在有兩種（含）以上色碼,將不能改變顏色,為防止不必要錯誤
```

### onStart
```
點擊icon後的動作
```
