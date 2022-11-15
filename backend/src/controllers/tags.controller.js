import services from '../services/index.js';
const { tagsServices } = services;

export const getTags = async (req, res) => {
  return tagsServices.getTags(req, res);
};

export const createTag = async (req, res) => {
  return tagsServices.createTag(req, res);
};

export const deleteTag = async (req, res) => {
  return tagsServices.deleteTag(req, res);
};
