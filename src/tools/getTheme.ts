import { useDispatch } from 'react-redux';
import { setDarkTheme, setLightTheme } from '@/store/slice/themeSlice';
import { useEffect } from 'react';

export function getTheme() {
  // Get localStorage value
  const themeData = localStorage.getItem('data-theme');
  const nowTheme = localStorage.getItem('now-theme');

  const dispatch = useDispatch();

  useEffect(() => {
    const lightTheme = () => {
      dispatch(setLightTheme());
    };
    const darkTheme = () => {
      dispatch(setDarkTheme());
    };

    if (!themeData || themeData === 'auto') {
      setTheme(darkTheme, lightTheme);
      setAttribute('auto');
    } else {
      switch (nowTheme) {
        case 'dark':
          darkTheme();
          setAttribute('dark');
          break;
        case 'light':
          darkTheme();
          // lightTheme()
          setAttribute('light');
          break;
      }
    }
  }, []);
}

export function setAttribute(value: string) {
  localStorage.setItem('data-theme', value);
  document.body.setAttribute('data-theme', value);
}

function setTheme(darkTheme, lightTheme) {
  // 監聽使用者系統模式
  window.onload = function getDark() {
    /**
     * 首次載入現在的模式
     * **/
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      darkTheme();
    } else {
      darkTheme();
      // lightTheme()
    }

    /**
     * 監聽模式的變更
     * **/
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      const newColorScheme = e.matches ? 'dark' : 'light';
      if (newColorScheme == 'dark') {
        darkTheme();
      } else if (newColorScheme == 'light') {
        lightTheme();
      }
    });
  };
}
