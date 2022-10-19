export const mapperDTOToQuoteModel = (dto) => {
  const {
    id,
    content,
    author,
    tags,
    userId,
    upvotesCount,
    downvotesCount,
    createdAt,
    givenVote,
  } = dto;
  return {
    id,
    content,
    author,
    tags,
    userId,
    upvotesCount,
    downvotesCount,
    createdAt,
    givenVote,
  };
};

export const mapperQuoteModelToDTO = (model) => {
  const {
    id,
    content,
    author,
    tags,
    userId,
    upvotesCount,
    downvotesCount,
    createdAt,
    givenVote,
  } = model;
  return {
    id,
    content,
    author,
    tags,
    userId,
    upvotesCount,
    downvotesCount,
    createdAt,
    givenVote,
  };
};

export const mapperQuotesDTOToModel = (dto) => {
  const { quotesCount, quotes } = dto;
  const quotesMap = quotes.map((quote) => mapperDTOToQuoteModel(quote));

  return {
    quotesCount,
    quotesMap,
  };
};

export const mapperQuotesModelToDTO = (model) => {
  const { quotesCount, quotes } = model;
  const quotesMap = quotes.map((quote) => mapperQuoteModelToDTO(quote));

  return {
    quotesCount,
    quotesMap,
  };
};
