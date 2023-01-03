import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from '@/store/index';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    {/* 註解 React.StrictMode 會有渲染兩次問題 我覺得很煩*/}

    {/*<React.StrictMode>*/}
    <App />
    {/*</React.StrictMode>*/}
  </Provider>
);
