import { useSelector } from 'react-redux';
import { theme } from '@/store/slice/themeSlice';

// 判斷陣列值是否有重複
export function isRepeat(array: any[]): boolean {
  const set = new Set();
  let result = false;

  array.map((item) => {
    if (set.has(item)) {
      result = true;
      return;
    } else {
      set.add(item);
    }
  });

  return result;
}

// 當前是否為Dark模式
export function isDark() {
  const { darkMode } = useSelector(theme);
  return darkMode;
}
