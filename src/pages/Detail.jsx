import React, { useCallback, useEffect } from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import WirteComment from '../components/Detail/WriteComment';
import { deleteMemes, getMemeById } from '../redux/modules/postSlice';
import { useState } from 'react';
import CommentView from '../components/Detail/CommentView';

function Detail() {
  const { memeId } = useParams();
  const meme = useSelector((state) => state.meme.meme);

  const dispatch = useDispatch();

  const getMeme = useCallback(() => {
    dispatch(getMemeById(memeId));
  }, [dispatch, memeId]);

  useEffect(() => {
    getMeme();
  }, [getMeme]);
  return (
    <>
      <StBoxOuter>
        <StBox>
          <h1>{meme.title}</h1>
          <Link to="/">
            <Button
              onClick={() => dispatch(deleteMemes(memeId))}
              sx={{ mt: 2, ml: '15px' }}
              color="error"
              variant="outlined"
            >
              삭제
            </Button>
          </Link>
          <Link to={`/update/${memeId}`}>
            <Button sx={{ mt: 2, ml: '15px' }} variant="outlined">
              수정
            </Button>
          </Link>
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              mt: 2,
              '& > :not(style)': {
                m: 1,
                width: 550,
                height: 400,
              },
            }}
          >
            <Paper elevation={3}>{meme.img && <img src={meme.img} alt="img" />}</Paper>
          </Box>
          <Box
            component="form"
            sx={{
              '& .MuiTextField-root': { m: 1, width: '62ch' },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              label="내용"
              variant="outlined"
              multiline
              rows={4}
              value={meme.contents}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <RadioGroupOuter>
            <FormControl>
              <FormLabel id="demo-radio-buttons-group-label">정답을 선택해 주세요</FormLabel>

              <RadioGroup
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="female"
                name="radio-buttons-group"
              >
                <FormControlLabel value="female" control={<Radio />} label={meme.exam1} />
                <FormControlLabel value="male" control={<Radio />} label={meme.exam2} />
                <FormControlLabel value="other" control={<Radio />} label={meme.exam3} />
              </RadioGroup>
              <Button variant="outlined" size="small">
                정답제출
              </Button>
            </FormControl>
          </RadioGroupOuter>
          <WirteComment />
          <CommentView />
        </StBox>
      </StBoxOuter>
    </>
  );
}

export default Detail;

const StBox = styled.div`
  margin: 0 auto;
`;
const StBoxOuter = styled.div`
  align-items: center;
  display: flex;
  text-align: center;
  margin-top: 50px;

  &::after {
    content: '';
    clear: both;
    display: table;
  }
`;

const TextBox = styled.textarea`
  min-width: 550px;
  max-width: 550px;
  min-height: 140px;
  max-height: 140px;
  display: block;
`;

const RadioGroupOuter = styled.div`
  text-align: left;
`;
