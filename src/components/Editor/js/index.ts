const aiga = new RegExp(/([\.|\(|\)|,|{|}|\W])/g)

export function codeToSplit(code : string) : Array<string> {
    return code.split(/\n/)
    const splitLine = code.split(/\n/)
    const result : Array<string> = []

    // splitLine.map((item: string) => {
    //     result.push(combination(item.split(aiga)))
    // })
    //
    // return result
}

// ${codeRecompilation.className ? `className='${codeRecompilation.className}'` : ''}

function combination(codeArray: string[]) {
    let result : string = ''

    codeArray.map((code) => {
        if (code) {
            const  codeRecompilation =  recompilation(code)
            result += `<span ${codeRecompilation.className ? `className='${codeRecompilation.className}'` : ''}>${codeRecompilation.code}</span>`
        }
    })

    return result
}

function recompilation(code : string) {

    const result = {
        className: '',
        code: '',
    }

    switch (code) {
        case ' ':
            result.code = '&nbsp'
            break;
        default:
            result.className = code
            result.code = code
    }

    return result
}
