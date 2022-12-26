import React, { useEffect } from 'react';
import Navbar from '../../components/navbar';
import { useDispatch, useSelector } from 'react-redux';
import { setError } from './redux/slices';
import ErrorDialog from '../../components/errorDialog';
import Loader from '../../components/loader';
import { ContentContainer, MainContainer } from './styles';
import SideNavbar from './components/sideNavbar';
import UserInfo from './components/userInfo';
import Posts from './components/posts';
import { useSearchParams } from 'react-router-dom';
import { setProfileView } from './components/sideNavbar/redux/slices';
import { profileView } from './components/sideNavbar/redux/state';
import ReportedPosts from './components/reportedPosts';
import ReportedComments from './components/reportedComments';

const Profile = () => {
  const { error, loading } = useSelector((state) => state.profile);
  const [searchParams, setSearchParams] = useSearchParams();
  const usernameUrl = searchParams.get('username');
  const username = useSelector((state) => state.app.username);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!usernameUrl) {
      setSearchParams({ username: username });
    }
  }, [usernameUrl, setSearchParams, username]);

  useEffect(() => {
    if (usernameUrl !== username) {
      dispatch(setProfileView(profileView.posts));
    }
  }, [usernameUrl, setSearchParams, username, dispatch]);

  const viewToRender = (
    <>
      <Navbar />
      <MainContainer>
        <SideNavbar />
        <ContentContainer>
          <Posts />
          <ReportedPosts />
          <ReportedComments />
          <UserInfo />

          {loading ? <Loader /> : null}
        </ContentContainer>
      </MainContainer>
    </>
  );

  if (error) return <ErrorDialog error={error} setError={setError} />;
  else return viewToRender;
};

export default Profile;
