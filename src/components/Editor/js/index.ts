const aiga = new RegExp(/([\.|\(|\)|,|{|}|\W])/g)

export function codeToSplit(code : string) : Array<string> {
    return code.split(/\n/)

    // splitLine.map((item: string) => {
    //     result.push(combination(item.split(aiga)))
    // })
    //
    // return result
}

// ${codeRecompilation.className ? `className='${codeRecompilation.className}'` : ''}

export function combination(code: string) {
    console.log(code.split(aiga))
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
