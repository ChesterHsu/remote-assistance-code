declare const window: any;

export {}

declare global {
    interface Window {
        showOpenFilePicker: any;
        showDirectoryPicker: any;
    }
}
