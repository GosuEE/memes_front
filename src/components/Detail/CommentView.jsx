import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux/es/exports';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux/es/exports';
import { readComments } from '../../redux/modules/commentSlice';
import { useCallback } from 'react';
import { deleteComment } from '../../redux/modules/commentSlice';
import { updateComment } from '../../redux/modules/commentSlice';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import AutoFixNormalIcon from '@mui/icons-material/AutoFixNormal';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from 'styled-components';
import Button from '@mui/material/Button';
import { display } from '@mui/system';
import { getMemeById } from '../../redux/modules/postSlice';

function CommentView() {
  const param = useParams();
  const [modifyContent, setModifyContent] = useState('');
  const comments = useSelector((state) => state.meme.meme.answerReplyList);
  console.log(comments);
  const dispatch = useDispatch();

  async function updateCommentHandler(commentId) {
    alert('수정완료');
    await dispatch(updateComment({ id: commentId, content: modifyContent }));
    dispatch(getMemeById(param.memeId));
    setModifyContent('');
    const showBox = document.getElementById(commentId);
    showBox.style.display = 'none';
  }

  async function deleteCommentHandler(commentId) {
    alert('삭제완료');
    await dispatch(deleteComment(commentId));
    dispatch(getMemeById(param.memeId));
  }

  const dispatchReadComments = useCallback(() => {
    dispatch(getMemeById(param.memeId));
  }, [dispatch]);

  useEffect(() => {
    dispatchReadComments();
  }, [dispatchReadComments]);

  function selectHandler(commentId) {
    const showBox = document.getElementById(commentId);
    showBox.style.display == 'none'
      ? (showBox.style.display = 'block')
      : (showBox.style.display = 'none');
  }

  return (
    <div>
      <List sx={{ width: '100%', maxWidth: 550, bgcolor: 'background.paper' }}>
        {comments?.map((comment) => {
          return (
            <>
              <ListItem
                key={comment.id}
                disableGutters
                secondaryAction={
                  <IconButton
                    aria-label="comment"
                    type="button"
                    onClick={() => {
                      deleteCommentHandler(comment.id);
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <IconButton
                  aria-label="comment"
                  type="button"
                  id="show"
                  onClick={() => {
                    selectHandler(comment.id);
                  }}
                >
                  <AutoFixNormalIcon />
                </IconButton>
                <ListItemText primary={`${comment.nickname}` + ' :' + `${comment.comment}`} />
              </ListItem>

              <div id={comment.id} style={divStyle}>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '55ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <BoxInner>
                    <TextField
                      multiline
                      id="outlined-basic"
                      label="댓글수정"
                      variant="outlined"
                      type="text"
                      onChange={(e) => {
                        setModifyContent(e.target.value);
                      }}
                    />
                    <ButtonOuter>
                      <Button
                        variant="outlined"
                        type="button"
                        onClick={() => {
                          updateCommentHandler(comment.id);
                        }}
                      >
                        수정
                      </Button>
                    </ButtonOuter>
                  </BoxInner>
                </Box>
              </div>
            </>
          );
        })}
      </List>
    </div>
  );
}

export default CommentView;
const ButtonOuter = styled.div`
  /* display: inline; */
  align-self: flex-end;
  margin-bottom: 8px;
`;

const BoxInner = styled.div`
  display: flex;
  align-items: flex-end;
`;

const divStyle = {
  display: 'none',
};
