const language = window.navigator['userLanguage'] || window.navigator.language; // 取得瀏覽器語系
export const defaultLang = language.replace('-', ''); // 拔除 -

export const supportedLangs = {
  en: 'English',
  de: 'Deutsche',
  fr: 'Français',
  zhTW: 'TraditionalChinese'
};
