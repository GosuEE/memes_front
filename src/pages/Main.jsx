import React, { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '../components/List';
import { readMemes } from '../redux/modules/postSlice';

function Main() {
  const dispatch = useDispatch();
  const memes = useSelector((state) => state.meme.memes);
  console.log(memes);

  const dispatchReadMemes = useCallback(() => {
    dispatch(readMemes());
  }, [dispatch]);

  useEffect(() => {
    dispatchReadMemes();
  }, [dispatchReadMemes]);
  return <List memes={memes} />;
}

export default Main;
