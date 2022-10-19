/**
 * Used as QuoteDTO
 *
 * @param {String[]} tags
 */
const QuoteDTO = {
  id: "",
  content: "",
  author: "",
  tags: [],
  userId: "",
  upvotesCount: 0,
  downvotesCount: 0,
  createdAt: "",
  givenVote: "",
};

/**
 * Used as QuotesDTO
 *
 * @param {QuoteDTO} quotes
 */
const QuotesDTO = {
  quotesCount: "",
  quotes: [],
};
