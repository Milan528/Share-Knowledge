import './App.css';
import { useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import Router from './app/router';
import { unsubscribe } from './app/store';

function App() {
  // const app = useSelector((state) => state.app);

  useEffect(() => {
    // localStorage.setItem('app', JSON.stringify(app));
    return () => {
      console.log('unsubscirbe');
      unsubscribe();
    };
  });

  return (
    <>
      {console.log('App rendered')}
      <Router />
    </>
  );
}

export default App;
