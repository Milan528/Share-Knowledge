import React, { useState, useEffect, useCallback } from 'react';
import styles from './styles.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { percentageStyle, arrowStyle } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import voteType from '../../../../../../enums/voteEnum.js'
import { voteAction } from '../../../../reduxThunk/actions';

//TODO: after clearing local storage, changing vote doesnt work only if aalready voted

export default function Controlls(props){
  const { id, downvotesCount, upvotesCount, givenVote } = props;
  const calculatePercentage = useCallback(
    () => Math.round((upvotesCount / (upvotesCount + downvotesCount)) * 100),
    [upvotesCount, downvotesCount]
  );

  const dispatch = useDispatch();
  const home = useSelector((state) => state.home);
  const { quotes } = home;
  const [percentage, setPercentage] = useState(calculatePercentage);
  let voting = false;

  const handleVoting = (vote) => {
    if (!voting) {
      voting = true;
      dispatch(voteAction(vote, givenVote, id));
    }
  };



  useEffect(() => {
    voting = false;
    setPercentage(calculatePercentage());
  }, [quotes, calculatePercentage]);

  const viewToRender = (
    <div className={styles.container}>
      <FontAwesomeIcon
        icon={faCaretUp}
        style={arrowStyle(givenVote,voteType.upvote)}
        onClick={() => handleVoting(voteType.upvote)}
      />
      <p style={percentageStyle(percentage)} className={styles.percentage}>
        <b>{percentage}%</b>
      </p>
      <p className={styles.score}>
        <small>
          {upvotesCount} / {downvotesCount}
        </small>
      </p>
      <FontAwesomeIcon
        icon={faCaretDown}
        style={arrowStyle(givenVote,voteType.downvote)}
        onClick={() => handleVoting(voteType.downvote)}
      />
    </div>
  );

  return viewToRender;
};

