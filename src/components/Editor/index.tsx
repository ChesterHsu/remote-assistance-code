import '@/css/components/Editor/index.scss';
import React, {useEffect, useImperativeHandle, useLayoutEffect, useMemo, useRef, useState} from 'react';
import * as styles from './js/style';
import shortcuts from './js/shortcuts';
import { htmlEncode, processHtml } from './js/utils';
import { TextareaCodeEditorProps } from './js/interface';
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
    const [scrollWidth, setScrollWidth] = useState({ width: '100%' })
    const [scrollHeight, setScrollHeight] = useState({ height: '100%' })

    const getColumnSize = (size) => {
        if (size.scrollWidth > size.width ) {
            setScrollWidth({ width: `${size.scrollWidth}px` })
        }

        if (size.scrollHeight > size.height ) {
            setScrollHeight({ height: `${size.scrollHeight}px` })
        }
    }
    useSize('column-id', getColumnSize);


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
                style={{ ...styles.editor, minHeight, ...scrollWidth , ...scrollHeight}}
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
                id={ `editor-id` }
                className={ `editor` }>
                <div className={ `sequence` }></div>
                <div
                    id={ `column-id` }
                    className={ `editor-column` }
                    style={{
                        ...styles.column
                    }}
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
                            ...scrollWidth,
                            ...scrollHeight
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
        </>
    );
})
