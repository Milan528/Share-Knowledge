const selectFiles = (files, ...fileTypes) => {
  const selectedFiles = files.filter((file) =>
    fileTypes.some((fileType) => fileType.includes(file.ext))
  );

  return selectedFiles;
};

export const FilesSelector = {
  selectImages: (files) => selectFiles(files, '.png', '.jpg', '.jpeg'),
  selectDocuments: (files) => selectFiles(files, '.doc', '.docx', '.pdf'),
};
