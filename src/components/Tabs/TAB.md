# Tab api 文件


## TabsProps

以下星號（*）為必填 

### *uid 
```
檔案的uid,作為鍵值使用, // 必傳
```

### *name
```
Tab內容、內文
```

### closeLocation
```
關閉Tab功能有分前後,帶入參數為 front 或者是 back,預設為back
```

### icon
```
可放入在“name” 前後 svg 傳入格式請參考 SvgIcon
```

### iconLocation
```
icon 放入內文前後設定,帶入參數為 front 或者是 back,預設為front
```

### onStart
```
點擊Tab後的動作
```

### onHover
```
移動、離開Tab後觸發,其中isHove為Boolean
true：當前狀態移動到Tab上
false：移開當前Tab上
tabContent：當前tab資訊
```

### tabStyle
```
為Tab外框Style
```

### tabDetailStyle
```
為Tab選項Style
```

### tabClassName
```
為Tab外框ClassName
```

### tabDetailClassName
```
為Tab選項ClassName
```

#### closeTab
```
點擊Tab Close後觸發功能
```
