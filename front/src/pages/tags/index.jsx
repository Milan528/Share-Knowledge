import React from 'react';
import Navbar from '../../components/navbar';
import DeleteTag from './components/deleteTag';
import AddTag from './components/addTag';
import { useDispatch, useSelector } from 'react-redux';
import { setError } from './redux/slices';
import ErrorDialog from '../../components/errorDialog';
import Loader from '../../components/loader';
import { Container, Content, LoaderContainer } from './styles';
import Footer from '../../components/footer';

const Tags = () => {
  const error = useSelector((state) => state.tags.error);
  const loading = useSelector((state) => state.tags.loading);
  const dispatch = useDispatch();

  const viewToRender = (
    <>
      <Navbar />
      <Container>
        <Content>
          <AddTag />
          <DeleteTag />
        </Content>
        <LoaderContainer>{loading ? <Loader /> : null}</LoaderContainer>
      </Container>
      <Footer />
    </>
  );

  if (error)
    return (
      <ErrorDialog error={error} setError={() => dispatch(setError(null))} />
    );
  else return viewToRender;
};

export default Tags;
