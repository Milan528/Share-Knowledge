import React from 'react'
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import Fliters from './components/filters';
import { ColumnFlexContainer } from '../../../../components/styles.js';



const Content = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state)=>state.home.posts);
    console.log("Content rendered")
  return (
    <ColumnFlexContainer>
     <Fliters/>
     {posts.map((post,index)=>(
        <div key={index}>{console.log(post)}</div>
     ))}
    </ColumnFlexContainer>
  )
}

export default Content

