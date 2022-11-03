import React from 'react'
import Navbar from "../../components/navbar";
import { ContentContainer } from './styles';
import Fliters from './components/filters';
import CreatePost from "./components/createPost";
import Posts from "./components/posts";

export default function Home() {

  return(
    <>
      {console.log("HomePage rendered")}
      <Navbar/>
      <CreatePost/>
        <ContentContainer>
            <Fliters/>
            <Posts/>
        </ContentContainer>
      <p>footer</p>
    </>
  )
}