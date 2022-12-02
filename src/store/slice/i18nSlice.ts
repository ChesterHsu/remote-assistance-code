import { createSlice } from "@reduxjs/toolkit";
import {
    defaultLang,
    supportedLangs,
} from '@/config/i18n/i18nConfig';
import { en, de, fr } from "@/config/i18n/langs";

const initialState = {
    lang: defaultLang, // "en" when app loads
    supportedLangs: { ...supportedLangs },
    translations: { en, de, fr },

};

const i18nSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {}
});

export const selectTranslations = (state) => state.i18n.translations[state.i18n.lang];

export default i18nSlice.reducer;
