import { useDispatch } from "react-redux";
import { setDarkTheme, setLightTheme } from "@/store/slice/themeSlice";

export function getTheme() {
    const dispatch = useDispatch();

    // 監聽使用者系統模式
    window.onload = function getDark () {
        let mode = document.getElementById("mode");

        /**
         * 首次載入現在的模式
         * **/
        if (
            window.matchMedia &&
            window.matchMedia("(prefers-color-scheme: dark)").matches
        ) {
            dispatch(setDarkTheme());
        } else {
            setLightTheme();
        }

        /**
         * 監聽模式的變更
         * **/
        window
            .matchMedia("(prefers-color-scheme: dark)")
            .addEventListener("change", (e) => {
                const newColorScheme = e.matches ? "dark" : "light";
                if (newColorScheme == "dark") {
                    dispatch(setDarkTheme());
                } else if (newColorScheme == "light") {
                    dispatch(setLightTheme());
                }
            });
    };
}
