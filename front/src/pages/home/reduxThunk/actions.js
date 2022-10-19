import { getAllQuotesRepository } from "../infrastructure/repository/quotes/quotes";
import { loading, setQuotes, setQuotesCount } from "../redux/slices";
import voteType from "../../../enums/voteEnum.js";
export const loadPage = () => async (dispatch, getState) => {
  dispatch(loading(true));
  const { quotesCount, quotesMap } = await getAllQuotesRepository();
  dispatch(setQuotes(quotesMap));
  dispatch(setQuotesCount(quotesCount));
  dispatch(loading(false));
};

export const voteAction =
  (newVote, oldVote, id) => async (dispatch, getState) => {
    const { home } = getState();
    const { quotes } = home;
    const removeVote = newVote === oldVote;
    const upVote = newVote === voteType.upvote;
    const downVote = newVote === voteType.downvote;

    let quoteIndex = quotes.findIndex((quote) => quote.id === id);
    let quoteToUpdate = quotes[quoteIndex];

    let cloneQuote = {
      id: quoteToUpdate.id,
      content: quoteToUpdate.content,
      author: quoteToUpdate.author,
      tags: quoteToUpdate.tags,
      userId: quoteToUpdate.userId,
      upvotesCount: quoteToUpdate.upvotesCount,
      downvotesCount: quoteToUpdate.downvotesCount,
      createdAt: quoteToUpdate.createdAt,
      givenVote: removeVote ? voteType.none : newVote,
    };

    if (removeVote && upVote) {
      cloneQuote.upvotesCount = quoteToUpdate.upvotesCount - 1;
    } else if (removeVote && downVote) {
      cloneQuote.downvotesCount = quoteToUpdate.downvotesCount - 1;
    } else if (!removeVote && upVote) {
      cloneQuote.upvotesCount = quoteToUpdate.upvotesCount + 1;
      if (oldVote === voteType.none)
        cloneQuote.downvotesCount = quoteToUpdate.downvotesCount;
      else if (oldVote === voteType.downvote)
        cloneQuote.downvotesCount = quoteToUpdate.downvotesCount - 1;
    } else if (!removeVote && downVote) {
      cloneQuote.downvotesCount = quoteToUpdate.downvotesCount + 1;
      if (oldVote === voteType.none)
        cloneQuote.upvotesCount = quoteToUpdate.upvotesCount;
      else if (oldVote === voteType.upvote)
        cloneQuote.upvotesCount = quoteToUpdate.upvotesCount - 1;
    }

    const updatedQuotes = quotes.map((quote) =>
      quote.id === quoteToUpdate.id ? cloneQuote : quote
    );

    dispatch(setQuotes(updatedQuotes));

    try {
      // let quoteToUpdate = cloneQuotes.map((quote) => {
      //   if (quote.id === id) {
      //     quote.givenVote = newVote;
      //     //cast new vote
      //     addNewVote(newVote, quote);
      //     //remove old
      //     removeOldvote(oldVote, quote);
      //   }
      // });
      //backend
      // let updatedQuote = null;
      // if (dismissVote && downVote) {
      //   updatedQuote = await deleteDownvote(id);
      // }
      // if (dismissVote && upVote) {
      //   updatedQuote = await deleteUpvote(id);
      // }
      // if (!dismissVote && downVote) {
      //   updatedQuote = await castDownvote(id);
      // }
      // if (!dismissVote && upVote) {
      //   updatedQuote = await castUpvote(id);
      // }
    } catch (err) {
      console.log(err);
    }
  };

const addNewVote = (newVote, quote) => {
  if (newVote === voteType.upvote) {
    quote.upvotesCount = quote.upvotesCount + 1;
  } else if (newVote === voteType.downvote) {
    quote.downvotesCount = quote.downvotesCount + 1;
  }
};

const removeOldvote = (oldVote, quote) => {
  if (oldVote === voteType.upvote) {
    return quote.upvotesCount - 1;
  } else if (oldVote === voteType.downvote) {
    return quote.downvotesCount - 1;
  }
};
