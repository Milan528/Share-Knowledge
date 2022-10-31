import React from 'react'
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import Fliters from './components/filters';
import { ContentContainer } from './styles';



const Content = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state)=>state.home.posts);
    console.log("Content rendered")
  return (
    <ContentContainer>
     <Fliters/>
     {posts.map((post,index)=>(
        <div key={index}>{console.log(post)}</div>
     ))}
    
    </ContentContainer>
  )
}

export default Content

