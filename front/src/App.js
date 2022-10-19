import logo from "./logo.svg";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import React, { useEffect, useState, useRef } from "react";
import Loader from "./components/loader";
import { loadApp } from "./reduxThunk/actions";
import Router from "./router";

function App() {
  const dispatch = useDispatch();
  const app = useSelector((state) => state.app);
  const { loadingApp } = app;

  // useEffect(() => {
  //   dispatch(loadApp());
  // }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("app", JSON.stringify(app));
  }, [app]);

  return (
    <>
      {console.log("App rendered")}
      <div>{loadingApp ? <Loader></Loader> : <Router></Router>}</div>
    </>
  );
}

export default App;
