import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styled from '@emotion/styled';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { createComment } from '../../redux/modules/commentSlice';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { getMemeById } from '../../redux/modules/postSlice';
import { readCommentsGetByMemeId } from '../../redux/modules/commentSlice';

function WirteComment() {
  const [commentContent, setCommentContent] = useState('');
  const param = useParams();
  const dispatch = useDispatch();
  const comment = {
    id: nanoid(),
    memeId: param.memeId,
    content: commentContent,
  };
  const dispatchCreateComment = async () => {
    alert('작성완료');
    await dispatch(createComment(comment));
    dispatch(readCommentsGetByMemeId(param.memeId));
    setCommentContent('');
  };

  return (
    <>
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
            id="filled-required"
            label="댓글"
            variant="filled"
            multiline
            value={commentContent}
            onChange={(e) => {
              setCommentContent(e.target.value);
              console.log(comment);
            }}
          />
          <ButtonOuter>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              size="large"
              type="button"
              onClick={() => {
                dispatchCreateComment();
              }}
            ></Button>
          </ButtonOuter>
        </BoxInner>
      </Box>
    </>
  );
}

export default WirteComment;

const ButtonOuter = styled.div`
  /* display: inline; */
  align-self: flex-end;
  margin-bottom: 8px;
`;

const BoxInner = styled.div`
  display: flex;
  align-items: flex-end;
`;
