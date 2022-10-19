import Content from "./components/content";
import Controlls from "./components/controlls";
import styles from './styles.module.css'

export default function Quote(props) {
const {quote} = props;
return(
    <article className={styles.container} id={quote.id}>
    <Controlls
      id={quote.id}
      downvotesCount={quote.downvotesCount}
      upvotesCount={quote.upvotesCount}
      givenVote={quote.givenVote}
    />
    <Content author={quote.author} content={quote.content} />
  </article>
    );
}