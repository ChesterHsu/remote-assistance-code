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
    const [codeHeight, setCodeHeight] = useState({ height: '100%' })

    const getColumnSize = (size) => {
        if (size.scrollWidth > size.width ) {
            setCodeWidth({ width: `${size.scrollWidth}px` })
        }
    }

    const getRowSize = (size) => {
        if (size.scrollHeight > size.height ) {
            setCodeHeight({ height: `${size.scrollHeight}px` })
        }
    }
    useSize('column-content-id', getColumnSize);
    useSize('editor-id', getRowSize);


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
            <div
                className={ `editor` }>
                <div
                    id={ `editor-id` }
                    className={ `editor-row` }
                >
                    <div
                        className={ `sequence` }
                        style={{
                            ...styles.editor,
                            ...styles.sequence
                        }}
                    >
                    <pre>
                        <code>
                        {Array(codeRows)
                            .fill(1)
                            .map((value, key) => {
                                return (
                                    <>
                                        <span
                                            className={`sequence-number code-line`}
                                            style={{ minHeight }}
                                            key={`k${key}`}>
                                            { key + 1 }
                                        </span>
                                        <br />
                                    </>

                                );
                            })}
                    </code>
                    </pre>
                    </div>
                    <div
                        className={ `editor-column` }
                        style={{
                            ...styles.editorColumn,
                        }}
                    >
                        <div
                            id={ `column-content-id` }
                            style={{
                                ...styles.editorColumnContent,

                            }}
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
                                ...codeHeight
                            }}
                            onChange={(event) => {
                                setValue(event.target.value);
                                onChange && onChange(event);
                            }}
                            className={`${prefixCls}-text`}
                            value={value}
                        />
                            { PreView }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
})
