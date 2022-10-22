export const mapDTOToPost = (dto) => {
  return {
    ...dto,
    type: dto.type === "q" ? "question" : "answer",
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

export const mapDTOToPosts = (dto) => {
  return dto.map((post) => mapDTOToPost(post));
};

export const mapperQuotesModelToDTO = (model) => {
  const { quotesCount, quotes } = model;
  const quotesMap = quotes.map((quote) => mapperQuoteModelToDTO(quote));

  return {
    quotesCount,
    quotesMap,
  };
};
