import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { HeadingContainer, StyledH1 } from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { viewPostRoute } from '../../../../app/router/routes';
import { loadPostForHomepageFilters } from '../../reduxThunk/actions';

export const Heading = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const state = useSelector((state) => state.viewPost.post);
  const { post } = state;
  const navigate = useNavigate();
  const homepageFilters = location.state
    ? location.state.homepageFilters
    : null;
  const [selectedPostIndex, setSelectedPostIndex] = useState(
    location.state ? location.state.selectedPostIndex : null
  );

  const handleNextPost = () => {
    const { totalNumberOfPosts } = homepageFilters;
    setSelectedPostIndex((prev) => (prev + 1) % totalNumberOfPosts);
  };

  const handlePreviousPost = () => {
    const { totalNumberOfPosts } = homepageFilters;
    if (selectedPostIndex - 1 < 0) {
      setSelectedPostIndex(totalNumberOfPosts - 1);
    } else {
      setSelectedPostIndex(selectedPostIndex - 1);
    }
  };

  useEffect(() => {
    if (homepageFilters) {
      dispatch(
        loadPostForHomepageFilters(
          selectedPostIndex,
          homepageFilters,
          (postId) => {
            navigate(
              {
                pathname: viewPostRoute,
                search: `postId=${postId}`,
              },
              {
                state: {
                  homepageFilters,
                  selectedPostIndex,
                },
              }
            );
          }
        )
      );
    }
  }, [selectedPostIndex, dispatch, homepageFilters, navigate]);

  if (post) {
    return (
      <HeadingContainer>
        {location.state ? (
          <Button variant="outlined" onClick={handlePreviousPost}>
            <ChevronLeftIcon />
          </Button>
        ) : null}
        <StyledH1>{post.type === 'answer' ? 'Materijal' : 'Pitanje'}</StyledH1>
        {location.state ? (
          <Button variant="outlined" onClick={handleNextPost}>
            <ChevronRightIcon />
          </Button>
        ) : null}
      </HeadingContainer>
    );
  } else return null;
};

export default Heading;
