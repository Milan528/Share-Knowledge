import React from 'react';
import Navbar from '../../components/navbar';
import Form from './components/form';
import { useSelector } from 'react-redux';
import Loader from '../../components/loader';
import { Container, ContentContainer, PageHeading } from './styles';

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
      </Container>
    </>
  );

  if (loading) return <Loader />;
  else return viewToRender;
};

export default CreatePost;
