import React from 'react';
import styled from 'styled-components';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import WirteComment from '../components/Detail/WriteComment';
import TextField from '@mui/material/TextField';
import CommentView from '../components/Detail/CommentView';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
function Detail() {
  return (
    <StBoxOuter>
      <StBox>
        <h1>제목란</h1>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
              m: 1,
              width: 550,
              height: 400,
            },
          }}
        >
          <Paper elevation={3}>이미지</Paper>
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
            defaultValue="밈을 보고 답을 맞춰주세요 !!! "
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
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="어제 내 세상이 무너졌어...."
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                label="오늘 내 책상이 무너졌어..."
              />
              <FormControlLabel value="other" control={<Radio />} label="폰씨가 있어?" />
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
