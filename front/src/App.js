import "./App.css";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import Router from "./router";

function App() {
  const app = useSelector((state) => state.app);

  useEffect(() => {
    localStorage.setItem("app", JSON.stringify(app));
  }, [app]);

  return (
    <>
      {console.log("App rendered")}
      <Router />
    </>
  );
}

export default App;
