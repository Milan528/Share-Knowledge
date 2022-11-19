import React from 'react';
import Navbar from '../../components/navbar';
import { ContentContainer } from './styles';
import Footer from '../../components/footer';
import Form from './components/form';
import { useSelector } from 'react-redux';
import { setError } from './redux/slices';
import ErrorDialog from '../../components/errorDialog';
import Loader from '../../components/loader';

const Users = () => {
  const { error, loading } = useSelector((state) => state.users);

  const viewToRender = (
    <>
      <Navbar />
      <ContentContainer>
        <h1>Missing table of all users</h1>
        <Form />
        {loading ? <Loader /> : null};
      </ContentContainer>
      <Footer />
    </>
  );

  if (error) return <ErrorDialog error={error} handleError={setError} />;
  else return viewToRender;
};

export default Users;
