const aiga = new RegExp(/([\.|\(|\)|,|{|}|\W])/g)

export function codeToSplit(code : string) : Array<string> {
    return code.split(/\n/)
}


export function combination(code: string) {
    return code.split(aiga)
}

export function recompilation(code : string) {

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
