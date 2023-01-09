function useSize(id, callback) {

    const observer = new ResizeObserver(entries => {
        callback(Object.assign(entries[0].contentRect,
            {
                scrollWidth: entries[0].target.scrollWidth,
                scrollHeight: entries[0].target.scrollHeight,
            }))
    });

    const elementId = document.querySelector(`#${id}`)

    if (elementId) observer.observe(elementId)

    // observer.disconnect();

}

export default useSize
