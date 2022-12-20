const getExtensionFromFileName = (fileName) => {
  return fileName.split('.').pop();
};

const selectFiles = (files, ...fileTypes) => {
  const selectedFiles = files.filter((file) =>
    fileTypes.some((fileType) =>
      fileType.includes(getExtensionFromFileName(file.name))
    )
  );

  return selectedFiles;
};

export const selectImages = (files) =>
  selectFiles(files, '.png', '.jpg', '.jpeg');

export const selectWord = (files) => selectFiles(files, '.doc', '.docx');

export const selectPdf = (files) => selectFiles(files, '.pdf');

export const selectVideos = (files) => selectFiles(files, '.mp4');
