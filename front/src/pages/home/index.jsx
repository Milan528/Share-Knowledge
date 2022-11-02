import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadPage } from "./reduxThunk/actions";
import ErrorDialog from "../../components/errorDialog/index"
import Loader from "../../components/loader"
import { setError } from "./redux/slices";
import Navbar from "../../components/navbar";
import { ContentContainer } from './styles';
import Fliters from './components/filters';
import Post from "./components/post"
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import { StyledPaper } from "./styles";

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

  const postsView = () => {
    
    if(posts.length === 0){
      return (
        <Fade in={true}>
          <StyledPaper elevation={4}>
            <Typography variant="h5">
              {"Sadržaj još uvek nije kreiran!"}
            </Typography>
          </StyledPaper>
        </Fade>
      )
    }else{
      return (posts.map((data,index)=> <Post key={index} data={data}/>))
    }

  }

  const mainContent = () => {
    if(loading)
      return <Loader/> 
    else
      return (
      <ContentContainer>
        <Fliters/>
        {postsView()}
      </ContentContainer>
      )
  }

  const viewToRender = () => (
    <>
      <Navbar/>
      {mainContent()}
      <p>footer</p>
    </>
  )

  return(
    <>
      {console.log("HomePage rendered")}
      {error ? <ErrorDialog error={error} handleError={setError} /> :  viewToRender()}
    </>

  )
}