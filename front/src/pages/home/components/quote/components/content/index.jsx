import styles from './styles.module.css'
export default function Content({content,author}) {
    
    return(
        <div className={styles.container}>
        <p className={styles.content}>{content}</p>
        <p className={styles.author}>— {author.toUpperCase()}</p>
      </div>
        );
    }