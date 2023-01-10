import React, { useState } from 'react';
import Button from '@mui/material/Button';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { loginRoute } from '../../../../app/router/routes';
import { useLocation, useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const AddComment = React.forwardRef((props, ref) => {
  const token = useSelector((state) => state.app.token);
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedPostIndex] = useState(
    location.state ? location.state.selectedPostIndex : null
  );
  const homepageFilters = location.state
    ? location.state.homepageFilters
    : null;
  const [searchParams] = useSearchParams();
  const postID = searchParams.get('postId');

  const handleCreateComment = () => {
    if (token) {
      ref.current.scrollIntoView();
    } else {
      navigate(
        {
          pathname: loginRoute,
        },
        {
          state: {
            homepageFilters,
            selectedPostIndex,
            from: location.pathname,
            searchParams: `postId=${postID}`,
          },
        }
      );
    }
  };

  return (
    <Button
      variant="contained"
      onClick={handleCreateComment}
      startIcon={<AddCircleIcon />}
    >
      komentar
    </Button>
  );
});
