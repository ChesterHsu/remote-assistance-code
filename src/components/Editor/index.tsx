import '@/css/components/Editor/index.scss';
import React, {useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState} from 'react';
import * as styles from './js/style';
import shortcuts from './js/shortcuts';
import { htmlEncode, processHtml } from './js/utils';
import { TextareaCodeEditorProps } from './js/interface';
import { textarea } from "./js/style";
import useSize from "@/tools/useSize";

export default React.forwardRef<HTMLTextAreaElement, TextareaCodeEditorProps>((props, ref) => {
    const {
        prefixCls = 'w-tc-editor',
        value: _,
        padding = 10,
        minHeight = 16,
        placeholder,
        language,
        className,
        style,
        rehypePlugins,
        onChange,
        ...other
    } = props;

    const [value, setValue] = useState(props.value || '');
    useEffect(() => setValue(props.value || ''), [props.value]);
    const textRef = useRef<HTMLTextAreaElement>(null);
    useImperativeHandle<HTMLTextAreaElement, HTMLTextAreaElement>(ref, () => textRef.current!);
    const [codeRows, setCodeRows] = useState(typeof value === "string" ? value.split(/\r\n|\r|\n/).length : 0);
    useEffect(() => setCodeRows(typeof value === "string" ? value.split(/\r\n|\r|\n/).length : 0), [value]);
    const [codeWidth, setCodeWidth] = useState({ width: '100%' })
    const getSize = (size) => {
        if (size.scrollWidth > size.width ) {
            setCodeWidth({ width: `${size.scrollWidth}px` })
        }
    }
    const state = useSize('column-content-id', getSize);
    useEffect(() => { console.log(state) }, [state]);


    const htmlStr = useMemo(
        () =>
            processHtml(
                `<pre aria-hidden=true><code ${language && value ? `class="language-${language}"` : ''} >${htmlEncode(
                    String(value || ''),
                )}</code><br /></pre>`,
                rehypePlugins,
            ),
        [value, language, rehypePlugins],
    );

    const PreView = useMemo(
        () => (
            <div
                style={{ ...styles.editor, minHeight, ...codeWidth, }}
                className={`${prefixCls}-preview ${language ? `language-${language}` : ''}`}
                dangerouslySetInnerHTML={{
                    __html: htmlStr,
                }}
            />
        ),
        [prefixCls, language, htmlStr],
    );

    return (
        <>
            <div className={ `editor` }>
                <div className={ `sequence` }></div>
                <div
                    className={ `editor-column` }
                    style={{ ...styles.editorColumn }}
                >
                    <div
                        id={ `column-content-id` }
                        style={{ ...styles.editorColumnContent }}
                        className={ `editor-column-content` }
                    >
                        <textarea
                            {...other}
                            placeholder={placeholder}
                            onKeyDown={(evn) => {
                                if (!other.onKeyDown || other.onKeyDown(evn) !== false) {
                                    shortcuts(evn);
                                }
                            }}
                            style={{
                                ...styles.editor,
                                ...styles.textarea,
                                minHeight,
                                ...(placeholder && !value ? { WebkitTextFillColor: 'inherit' } : {}),
                                ...codeWidth,
                            }}
                            onChange={(event) => {
                                setValue(event.target.value);
                                onChange && onChange(event);
                            }}
                            className={`${prefixCls}-text`}
                            value={value}
                        />
                        {/*<div*/}
                        {/*    contentEditable*/}
                        {/*    className={`${prefixCls}-text`}*/}
                        {/*    style={{*/}
                        {/*        ...styles.editor,*/}
                        {/*        ...styles.textarea,*/}
                        {/*        minHeight,*/}
                        {/*        ...(placeholder && !value ? { WebkitTextFillColor: 'inherit' } : {}),*/}
                        {/*    }}*/}
                        {/*    dangerouslySetInnerHTML={{*/}
                        {/*        __html: value as string,*/}
                        {/*    }}*/}
                        {/*    onInput={ event => {*/}
                        {/*        setValue(event.currentTarget.textContent as string);*/}
                        {/*    } }*/}
                        {/*></div>*/}
                        { PreView }
                    </div>
                </div>
            </div>
        </>
    );
})
