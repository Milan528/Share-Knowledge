import urlBuilder from '../../../../services/urlBuilder';
import services from '../../../../services';

// export const addTag = "/tags/addTag"
// export const deleteTag = "/tags/deleteTag"

export const getAllTagsDataSource = async () => {
  return await services.getAll(urlBuilder.base_url('/tags'));
};

export const createTagDataSource = async (dto) => {
  return await services.postWithBodyNoParams(urlBuilder.base_url('/tags'), dto);
};
