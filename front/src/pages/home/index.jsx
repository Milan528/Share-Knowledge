import React from 'react';
import Navbar from '../../components/navbar';
import { ContentContainer } from './styles';
import Fliters from './components/filters';
import CreatePost from './components/createPost';
import Posts from './components/posts';
import Pagination from './components/pagination';

export default function Home() {
  return (
    <>
      <Navbar />
      <CreatePost />
      <ContentContainer>
        <Fliters />
        <Posts />
      </ContentContainer>
      <Pagination />
    </>
  );
}
