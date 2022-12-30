import '@/css/components/Editor/index.scss'
import React, { useEffect, useState } from "react";
import { codeToSplit, combination, recompilation } from "@/components/Editor/js";

function Editor() {
    const [codeStr, setCodeRow] = useState(`function  add(a, b) {\n  return a + b;\n}`)

    const [code, setCode] = useState( codeToSplit(codeStr) )

    // 輸入後改變Code Array
    const changeCode = (event, index) => {
        const change = code
        change[index] = event.currentTarget.textContent
        setCode(change)
        setCodeRow(code.join(''))
    }

    const CodeDetail = (value: string) => {

        return(
            <>{
                combination(value).map((item: string, index: number) => {
                    const detail = recompilation(item)
                    return(<span className={ detail.className } key={ index }> { detail.code } </span>)
                })
            }</>
        )
    }

    const Row = () => {
        return(
            <>
                {code.map((value, index) => {
                    return (
                        <div className={ `editor-row` } key={ index }>
                            <div className={ `sequence` }>
                                <div className={ `sequence-number` }>
                                    { index + 1 }
                                </div>
                            </div>
                            <div
                                contentEditable
                                className={ `edit` }
                                suppressContentEditableWarning={ true }
                                onInput={ event => { changeCode(event, index) } }
                            >
                                { CodeDetail(value) }
                            </div>
                        </div>
                        )
                    })
                }
            </>
        )
    }

    return(
        <div className={`editor`}>
            <Row />
        </div>
    )
}

export default Editor
