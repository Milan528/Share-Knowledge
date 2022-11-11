import React from 'react';
import Navbar from '../../components/navbar';
import Quote from './components/quote';
import Form from './components/form';
import Logo from './components/logo';
import Footer from '../../components/footer';
import { useSelector } from 'react-redux';
import { setError } from './redux/slices';
import ErrorDialog from '../../components/errorDialog';
import Loader from '../../components/loader';
import { ContentContainer, MotivationContainer } from './styles';
import AdditionalLogin from './components/additionalLogin';

const Login = () => {
  const { error, loading } = useSelector((state) => state.login);

  const viewToRender = (
    <>
      <Navbar />
      <ContentContainer>
        <MotivationContainer>
          <Logo />
          <Quote />
        </MotivationContainer>
        {!loading ? <Form /> : <Loader />}
        {/* <AdditionalLogin/> */}
      </ContentContainer>
      <Footer />
    </>
  );

  if (error) return <ErrorDialog error={error} handleError={setError} />;
  else return viewToRender;
};

export default Login;
