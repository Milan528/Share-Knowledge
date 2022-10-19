import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Quote from "./components/quote";
import { loadPage } from "./reduxThunk/actions";
import styles from './styles.module.css'
export default function Home() {
  const dispatch = useDispatch();
  const home = useSelector((state) => state.home);
  const {loading , quotes } = home;

  useEffect(()=>{
    dispatch(loadPage())
  },[dispatch])

  useEffect(() => {
    localStorage.setItem('home', JSON.stringify(home));
  }, [home]);

    return(
      <>
        <h1 className={styles.heading}>Quostes</h1>
        {console.log("HomePage rendered")}
        {loading? (<p>Loading Quotes....</p>) :
        quotes.map((quote,index)=>(
          <Quote quote={quote} key={index}></Quote>
        ))}
      </>
    )
}