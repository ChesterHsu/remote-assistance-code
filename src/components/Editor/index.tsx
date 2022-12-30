import '@/css/components/Editor/index.scss';
import React, { useEffect, useMemo, useState } from "react";
import * as styles from './js/style';
import shortcuts from "./js/shortcuts";
import { htmlEncode, processHtml } from "./js/utils";

function Editor(props) {

    const {
        prefixCls = 'w-tc-editor',
        value = `function add(a, b) {\n  return a + b;\n}`,
        padding = 10,
        minHeight = 16,
        placeholder,
        language = 'js',
        className,
        style = {
            fontSize: 16,
            width: '100%',
            backgroundColor: "transparent",
            fontFamily: 'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
        },
        rehypePlugins,
        onChange,
        ...other
    } = props;

    const contentStyle = {
        paddingTop: padding,
        paddingRight: padding,
        paddingBottom: padding,
        paddingLeft: padding,
    };

    const [code, setCode] = useState(props.value || '')
    useEffect(() => setCode(props.value || ''), [props.value]);
    const [codeRows, setCodeRows] = useState( code.split(/\r\n|\r|\n/).length )

    const codeEditorChange = (event) => {
        setCode(event.target.value)
        setCodeRows(code.split(/\r\n|\r|\n/).length)
    }

    const htmlStr = useMemo(
        () =>
            processHtml(
                `<pre aria-hidden=true><code ${language && code ? `class="language-${language}"` : ''} >${htmlEncode(
                    String(code || ''),
                )}</code><br /></pre>`,
                rehypePlugins,
            ),
        [code, language, rehypePlugins],
    );

    const preView = useMemo(
        () => (
            <div
                style={{ ...styles.editor, ...contentStyle, minHeight }}
                className={`${prefixCls}-preview ${language ? `language-${language}` : ''}`}
                dangerouslySetInnerHTML={{
                    __html: htmlStr,
                }}
            />
        ),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [prefixCls, language, htmlStr],
    );


    return(
        <div className={`editor`}>
            <div className={ `sequence` } style={{ ...contentStyle }}>
                {
                    Array(codeRows).fill(1).map((value, key) => {
                        return(
                            <div
                                className={ `sequence-number` }
                                style={{ minHeight }}
                                key={ `k${key}` }
                            >
                                { key + 1 }
                            </div>
                        )
                    })
                }
            </div>
            <div
                style={{ ...styles.container, ...style }}
            >
                <textarea
                    style={{
                        ...styles.editor,
                        ...styles.textarea,
                        ...contentStyle,
                        minHeight,
                        ...(placeholder && !code ? { WebkitTextFillColor: 'inherit' } : {}),
                    }}
                    autoComplete="off"
                    autoCorrect="off"
                    spellCheck="false"
                    autoCapitalize="off"
                    id={ `code-edit` }
                    className={ `code-editor ${prefixCls}-text` }
                    wrap="off"
                    onKeyDown={(evn) => {
                        if (!other.onKeyDown || other.onKeyDown(evn) !== false) {
                            shortcuts(evn);
                        }
                    }}
                    onChange={(evn) => {
                        codeEditorChange(evn);
                        onChange && onChange(evn);
                    }}
                    value={ code }
                />
                { preView }
            </div>
        </div>
    )
}

export default Editor
