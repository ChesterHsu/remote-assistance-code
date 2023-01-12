let files = {}

let mainFolderName = ''

export const getFile = async () => {
  // 匯入初始化
  files = {}

  // 先取得匯入File
  const dirHandle = await window.showDirectoryPicker({ mode: 'readwrite' });
  const upperLayerName = ''
  await fileLoop(dirHandle, upperLayerName)
}

const fileLoop = async (dirHandle, upperLayerName) => {
  let layerName = ''
  const promises: any[] = [];

  // 先取得上個層級Name,若為空則以當前資料夾name為第一層
  if (!upperLayerName) {
    layerName = dirHandle.name
    mainFolderName = dirHandle.name
  } else {
    layerName = `${upperLayerName}/${dirHandle.name}`
  }

  for await (const entry of dirHandle.values()) {
    if (entry.kind === 'file') {

      promises.push(entry.getFile().then(async (file) => {

        const files = {}

        files[`${layerName}/${file.name}`] = {
          lastModified: file.lastModified,
          name: file.name,
          type: file.name.split('.')[1],
          webkitRelativePath: `${layerName}/${file.name}`,
          text: await file.text(),
          size: await file.size
        }
        return files
      }))
    } else if(entry.kind === 'directory'){
      await fileLoop(entry, layerName)
    }
  }

  files[layerName] = await Promise.all(promises)
}
