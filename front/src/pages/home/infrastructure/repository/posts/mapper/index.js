export const mapDTOToPost = (dto) => {
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

export const mapDTOToPosts = ({ data: { posts } }) => {
  const map = posts.map((post) => ({
    ...post,
    type: post.type === "q" ? "question" : "answer",
  }));

  console.log(map);
};

export const mapperQuotesModelToDTO = (model) => {
  const { quotesCount, quotes } = model;
  const quotesMap = quotes.map((quote) => mapperQuoteModelToDTO(quote));

  return {
    quotesCount,
    quotesMap,
  };
};
