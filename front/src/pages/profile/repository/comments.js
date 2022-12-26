import services from '../../../services';
import { formatDate } from '../../../utils/dateFormater';

export const mapDTOToComment = (dto) => {
  return {
    ...dto,
    date: formatDate(new Date(dto.date)),
  };
};

export const mapDTOToComments = (dto) => {
  return dto.map((comment) => mapDTOToComment(comment));
};

export const loadReportedCommentsRepository = async () => {
  const dto = await services.get(`/comments/reports`);
  return mapDTOToComments(dto.data);
};
