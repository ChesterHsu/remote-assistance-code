import { configureStore } from '@reduxjs/toolkit';

import themeSlice from './slice/themeSlice';
import uploadReducer from './slice/upload';
import toolsReducer from './slice/tools';
import i18nSlice from '@/store/slice/i18nSlice';

export default configureStore({
  reducer: {
    upload: uploadReducer,
    tools: toolsReducer,
    theme: themeSlice,
    i18n: i18nSlice
  }
});
