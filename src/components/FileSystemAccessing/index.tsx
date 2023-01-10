let fileHandle;

export const getFile = async () => {
  console.log(23423423423)
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
