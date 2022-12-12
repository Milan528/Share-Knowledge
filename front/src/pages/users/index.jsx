import React from 'react';
import Navbar from '../../components/navbar';
import { ContentContainer } from './styles';
import Footer from '../../components/footer';
import Form from './components/form';
import { useSelector } from 'react-redux';
import { setError } from './redux/slices';
import ErrorDialog from '../../components/errorDialog';
import Loader from '../../components/loader';
import TableOfUsers from './components/tableOfUsers';

const Users = () => {
  const { error, loading } = useSelector((state) => state.users);
  const { token, role } = useSelector((state) => state.app);

  const viewToRender = (
    <>
      <Navbar />
      <ContentContainer>
        <h1>Najaktivniji članovi</h1>
        <TableOfUsers/>

        {token && role==="admin"? <Form /> : null}
        {loading ? <Loader /> : null};
      </ContentContainer>
      <Footer />
    </>
  );

  if (error) return <ErrorDialog error={error} handleError={setError} />;
  else return viewToRender;
};

export default Users;
