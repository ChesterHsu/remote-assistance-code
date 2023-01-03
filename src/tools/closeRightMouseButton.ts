/**
 * 關閉點擊滑鼠右鍵事件
 * **/
export default function closeRightMouseButton() {
  document.oncontextmenu = function (e) {
    return false;
  };
}
