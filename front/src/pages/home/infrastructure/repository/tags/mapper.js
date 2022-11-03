export const mapDTOToTag = (dto) => {
  return {
    ...dto,
  };
};

export const mapperTagToDTO = (model) => {
  return {
    ...model,
  };
};

export const mapDTOToTags = (dto) => {
  return dto.map((tag) => mapDTOToTag(tag));
};
