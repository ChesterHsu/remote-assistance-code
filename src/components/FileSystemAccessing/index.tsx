let fileHandle;

export const getFile = async () => {
  [fileHandle] = await window.showDirectoryPicker();
  await fileHandle.getFile();
  const file = await fileHandle.getFile();
  const contents = await file.text();
};

function FileSystemAccessing() {
  return (
    <>
      <div onClick={getFile}>TESTTTTT</div>
    </>
  );
}

export default FileSystemAccessing;
