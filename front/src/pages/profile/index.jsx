import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { useSelector } from 'react-redux';
import { setError } from './redux/slices';
import ErrorDialog from '../../components/errorDialog';
import Loader from '../../components/loader';
import { ContentContainer } from './styles';
import LeftBar from './components/adminBar';

const Profile = () => {
  const { error, loading } = useSelector((state) => state.profile);

  const viewToRender = (
    <>
      <Navbar />
      <ContentContainer>
        <LeftBar/>
        <h1>content</h1>
        {loading ? <Loader /> : null}
      </ContentContainer>
      <Footer />
    </>
  );

  if (error) return <ErrorDialog error={error} handleError={setError} />;
  else return viewToRender;
};

export default Profile;
