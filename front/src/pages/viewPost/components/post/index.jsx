import React, { useEffect, useState } from 'react';
import ErrorDialog from '../../../../components/errorDialog';
import { StyledPaper } from './styles';
import Title from './components/title';
import Loader from '../../../../components/loader';
import Content from './components/contet';
import Details from './components/details';
import Tags from './components/tags';
import { setError } from './redux/slices';
import { useSelector, useDispatch } from 'react-redux';
import { loadPost, loadPostId, loadSpecificPost } from '../../reduxThunk/actions';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { HeadingContainer, StyledH1 } from './styles';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { viewPostRoute } from '../../../../app/router/routes';

const Post = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.viewPost.post);
  const { loading, error, post } = state;
  const [searchParams] = useSearchParams();
  const location = useLocation();
  const [selectedPostIndex, setSelectedPostIndex] = useState(location.state.selectedPostIndex)
  const homepageFilters = location.state.homepageFilters;
  const searchParamsPostId = searchParams.get('postId');

  const navigate = useNavigate();

  useEffect(() => {
    if(!selectedPostIndex){
      dispatch(loadPost(searchParamsPostId));
    }
  }, [searchParamsPostId]);

  useEffect(()=> {
    if(Number.isFinite(selectedPostIndex)){
      dispatch(loadSpecificPost(selectedPostIndex, homepageFilters, (postId) => {
        navigate(
          {
            pathname: viewPostRoute,
            search: `postId=${postId}`,
          },
          {
            state: {
              homepageFilters,
              selectedPostIndex
            },
          }
        );
      }))
    }
  },[selectedPostIndex])

  const handleNextPost = () => {
    const { totalNumberOfPosts } = homepageFilters;
    setSelectedPostIndex(prev => (prev+1)%totalNumberOfPosts)
  };

  const handlePreviousPost = () => {
    const { totalNumberOfPosts } = homepageFilters;
    if(selectedPostIndex - 1 < 0 ){
      setSelectedPostIndex(totalNumberOfPosts-1)
    }else {
      console.log("ddddddddd")
      console.log(selectedPostIndex-1)
      setSelectedPostIndex(selectedPostIndex-1)
    }
  };

  const viewToRender = () => {
    const { title, type, text, files, tags, likes, id, date } = post;

    return (
      <>
        <HeadingContainer>
          {location.state ? (
            <Button variant="outlined" onClick={handlePreviousPost}>
              <ChevronLeftIcon />
            </Button>
          ) : null}
          <StyledH1>
            {post.type === 'answer' ? 'Materijal' : 'Pitanje'}
          </StyledH1>
          {location.state ? (
            <Button variant="outlined" onClick={handleNextPost}>
              <ChevronRightIcon />
            </Button>
          ) : null}
        </HeadingContainer>
        <StyledPaper elevation={1}>
          <Title title={title} type={type} />
          <Content text={text} files={files} />
          <Tags tags={tags} />
          <Details likes={likes} postId={id} date={date} />
        </StyledPaper>
      </>
    );
  };

  return error ? (
    <ErrorDialog error={error} handleError={setError} />
  ) : loading ? (
    <Loader />
  ) : (
    viewToRender()
  );
};

export default Post;
