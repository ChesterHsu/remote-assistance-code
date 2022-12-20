import { useEffect, useRef } from 'react'

const useWatch = (value, fn, config = { immediate: false }) => {
    const oldValue = useRef()
    const isFirst = useRef(false)

    useEffect(() => {
        if (isFirst.current) {
            fn(value, oldValue.current)
        } else {
            isFirst.current = true

            // 是否要立刻執行回調
            if (config.immediate) {
                fn(value, oldValue.current)
            }
        }

        oldValue.current = value
    }, [value])
}

export default useWatch
