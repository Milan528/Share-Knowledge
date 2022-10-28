import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Quote from "./components/quote";
import { loadPage } from "./reduxThunk/actions";
import styles from './styles.module.css'
import ErrorDialog from "../../components/errorDialog/index"
import Loader from "../../components/loader"
import { setError } from "./redux/slices";
import Navbar from "../../components/navbar";
import Content from "./components/Content";

export default function Home() {
  const dispatch = useDispatch();
  const home = useSelector((state) => state.home);

  const {loading , error, posts } = home;

  useEffect(()=>{
    dispatch(loadPage())
  },[dispatch])

  useEffect(() => {
    localStorage.setItem('home', JSON.stringify(home));
  }, [home]);

  return(
    <>
      {console.log("HomePage rendered")}
      {error ? 
      <ErrorDialog error={error} handleError={setError} /> : 
      (<>
         <Navbar/>
          {loading? <Loader/> : <Content/>}
          <p>footer</p>
          </>
      )}

    </>

  )
}