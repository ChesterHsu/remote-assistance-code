import { useSelector } from "react-redux";
import { theme } from '@/store/slice/themeSlice'

// 判斷陣列值是否有重複
export function isRepeat(array : any[]) {
    const set = new Set()

    array.map((item) => {
        if (set.has(item)) {
            return true
        } else {
            set.add(item)
        }
    })

    return false
}

// 當前是否為Dark模式
export function isDark() {
    const { darkMode } = useSelector( theme );
    return darkMode
}
