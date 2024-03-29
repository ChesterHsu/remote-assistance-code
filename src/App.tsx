import React from 'react';
import RemoteAssistanceRoute from './router';
import '@css/index.scss';
import { useSelector } from 'react-redux';
import { theme } from '@/store/slice/themeSlice';
import { ThemeProvider } from 'styled-components';
import { getTheme } from '@/tools/getTheme';
import { isDark } from '@/tools/judge';
import closeRightMouseButton from '@/tools/closeRightMouseButton';
import { io } from "socket.io-client";
function App() {
  const socket = io("http://127.0.0.1:21476", { forceNew: true });

  socket.on("connect", () => {
    console.log(socket.connected); // true
  });
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
