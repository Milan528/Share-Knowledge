import React from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import { useSelector } from 'react-redux';
import { setError } from './redux/slices';
import ErrorDialog from '../../components/errorDialog';
import Loader from '../../components/loader';
import { ContentContainer } from './styles';
import SideNavbar from './components/sideNavbar';

const Profile = () => {
  const { error, loading } = useSelector((state) => state.profile);

  const viewToRender = (
    <>
      <Navbar />
      <SideNavbar/>
      <ContentContainer>
        <h1>Profil</h1>
        {loading ? <Loader /> : null}
      </ContentContainer>
      <Footer />
    </>
  );

  if (error) return <ErrorDialog error={error} handleError={setError} />;
  else return viewToRender;
};

export default Profile;
