import React from 'react';
import Navbar from '../../components/navbar';
import Form from './components/form';
import { useSelector } from 'react-redux';
import Loader from '../../components/loader';
import { Container, ContentContainer, PageHeading } from './styles';
import { setError } from './redux/slices';
import ErrorDialog from '../../components/errorDialog';

const CreatePost = () => {
  const { error, loading } = useSelector((state) => state.createPost);
  
  const viewToRender = (
    <>
      <Navbar />
      <Container>
        <ContentContainer>
          <PageHeading variant="h5">Kreiranje objave</PageHeading>
          <Form />
        </ContentContainer>
        {loading ? <Loader /> : null}
      </Container>
    </>
  );

  if (error) return <ErrorDialog error={error} handleError={setError} />;
  else return viewToRender;
};

export default CreatePost;
