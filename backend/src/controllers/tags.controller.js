import services from '../services/index.js';
const { tagsServices } = services;

export const getTags = async (req, res) => {
  return tagsServices.getTags(req, res);
};
