import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';

function WirteComment() {
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
          <TextField id="filled-required" label="댓글" variant="filled" multiline />
          <ButtonOuter>
            <Button variant="contained" endIcon={<SendIcon />} size="large"></Button>
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
