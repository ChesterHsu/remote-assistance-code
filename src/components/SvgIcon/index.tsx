import React from 'react';
import { useSelector } from 'react-redux';
import { useDynamicSvgImport } from '@/components/SvgIcon/js/useDynamicSvgImport';
import { theme } from '@/store/slice/themeSlice';
import { isDark } from '@/tools/judge';
import { IconProps, SvgDarkColor } from '@/components/SvgIcon/js/interface';

/**
 * 將傳入的 darkTheme 邏輯拆開 並返還參數進行下一步處理
 * **/
function svgDarkColor(darkTheme): SvgDarkColor | Boolean {
  const darkThemeType = typeof darkTheme;
  switch (darkThemeType) {
    case 'string':
      const darkType = darkTheme.split('|'); // 將其拆開
      return checkDarkThemeFormat(darkType) ? ({ dark: darkType[0], light: darkType[1] } as SvgDarkColor) : false;
    case 'boolean':
      return darkTheme;
    default:
      return false;
  }
}

/**
 * 檢查Dark格式化是否符合對應條件
 * **/
function checkDarkThemeFormat(val) {
  return val.length === 2;
}

function SvgIcon(props: IconProps) {
  const { colors } = useSelector(theme);
  let { iconName, wrapperClassName, svgProp, darkTheme, onStart } = props;
  const { loading, SvgIcon, svgFill } = useDynamicSvgImport(iconName);

  let svgStyle: React.SVGProps<SVGSVGElement> = {};

  /**
   * 將傳入darkTheme去做拆分,並返還相應參數做後續顏色切換
   * **/
  const darkThemeType = svgDarkColor(darkTheme);

  /**
   * 判斷是否為dark模式
   * **/
  const dark = isDark();

  let darkFill = '';

  /**
   * 如果svg顏色遍歷不達一種以上則可由傳入參數去做切換顏色
   * **/

  if (!svgFill.repeat) {
    /**
     * 如果 darkThemeType 型別回傳為string,  就去抓當前dark模式給予傳入參數做切換
     * 如果 darkThemeType 型別回傳為boolean, 就去判別darkThemeType是否有為true,若是給予預設值
     * **/
    darkFill =
      typeof darkThemeType === 'object'
        ? dark
          ? darkThemeType['dark']
          : darkThemeType['light']
        : darkThemeType
        ? colors.svgFill
        : '';
  }

  /**
   * svgProp 如果有帶入值,去檢核其中fill是否有給值
   * 若否,在檢核 darkTheme 是否為true, 為true時檢核其條件給值
   * **/
  if (svgProp) {
    const { fill, ...params } = svgProp;
    svgStyle = !svgProp.fill ? (darkThemeType ? { fill: darkFill, ...params } : params) : svgProp;
  }

  /**
   *  判斷 darkTheme 是否有帶入值,有的話給相對應參數
   * **/
  if (darkThemeType) svgStyle.fill = darkFill;

  return (
    <>
      {loading && <div className="rounded-full bg-slate-400 animate-pulse h-8 w-8"></div>}
      {SvgIcon && (
        <div className={wrapperClassName} onClick={onStart}>
          <SvgIcon {...svgStyle} />
        </div>
      )}
    </>
  );
}

export default SvgIcon;
