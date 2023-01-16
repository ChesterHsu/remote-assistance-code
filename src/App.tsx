import React from 'react';
import RemoteAssistanceRoute from './router';
import '@css/index.scss';
import { useSelector } from 'react-redux';
import { theme } from '@/store/slice/themeSlice';
import { ThemeProvider } from 'styled-components';
import { getTheme } from '@/tools/getTheme';
import { isDark } from '@/tools/judge';
import closeRightMouseButton from '@/tools/closeRightMouseButton';

function App() {
  //使用 node.js 在本機上執行的 Server
  let ws = new WebSocket('ws://localhost:21274')

  //開啟後執行動作
  //指定一個function在onopen後執行
  //順便也把websocket物件印出來觀察看看
  ws.onopen = () => {
    console.log(ws)
    console.log('開啟連結')
  }

  //關閉後執行動作
  //指定一個function在onclose後執行
  ws.onclose = () => {
    console.log('關閉連結')
  }
  /**
   * 取得預設Theme模式
   * **/
  const themeValue = useSelector(theme);

  getTheme();

  /**
   * 關閉點擊滑鼠右鍵事件
   * **/
  closeRightMouseButton();

  const themeClassName = isDark() ? 'dark' : 'light';

  return (
    <div className={`app ${themeClassName}`}>
      <ThemeProvider theme={themeValue}>
        <RemoteAssistanceRoute />
      </ThemeProvider>
    </div>
  );
}

export default App;
