import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { nanoid } from 'nanoid';
import axios from 'axios';

function WirteComment() {
  const [commentContent, setCommentContent] = useState('');
  const comment = {
    id: nanoid(),
    content: commentContent,
  };
  function writeCommentHandler() {
    alert('작성완료');
    axios.post('http://localhost:3001/comments', comment);
    setCommentContent('');
  }

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
              console.log(commentContent);
            }}
          />
          <ButtonOuter>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              size="large"
              type="button"
              onClick={() => {
                writeCommentHandler();
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
