import '@/css/components/Editor/index.scss';
import React, { useEffect, useImperativeHandle, useMemo, useRef, useState } from 'react';
import * as styles from './js/style';
import shortcuts from './js/shortcuts';
import { htmlEncode, processHtml } from './js/utils';
import { TextareaCodeEditorProps } from './js/interface';
import { textarea } from "./js/style";

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
                style={{ ...styles.editor, minHeight }}
                className={`${prefixCls}-preview ${language ? `language-${language}` : ''}`}
                dangerouslySetInnerHTML={{
                    __html: htmlStr,
                }}
            />
        ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
                        style={{ ...styles.editorColumnContent }}
                        className={ `editor-column-content` }
                    >
                  <textarea
                      autoComplete="off"
                      autoCorrect="off"
                      spellCheck="false"
                      autoCapitalize="off"
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
        </>
    );
})
