import React, {useEffect} from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { useSelector } from 'react-redux';
import { setError } from './redux/slices';
import ErrorDialog from '../../components/errorDialog';
import Loader from '../../components/loader';
import { ContentContainer } from './styles';
import SideNavbar from './components/sideNavbar';
import UserInfo from './components/userInfo';
import Posts from './components/posts';
import { useSearchParams } from 'react-router-dom';


const Profile = () => {
  const { error, loading } = useSelector((state) => state.profile);
  const [searchParams, setSearchParams] = useSearchParams();
  const urlUsername = searchParams.get('username');
  const username = useSelector((state) => state.app.username);


  useEffect(()=>{
    if(!urlUsername){
      setSearchParams({ username: username })
    }
  },[urlUsername, setSearchParams, username])

  const viewToRender = (
    <>
      <Navbar />
      <SideNavbar />
      <ContentContainer>
        <UserInfo />
        <Posts />
        {loading ? <Loader /> : null}
      </ContentContainer>
      <Footer />
    </>
  );

  if (error) return <ErrorDialog error={error} handleError={setError} />;
  else return viewToRender;
};

export default Profile;
