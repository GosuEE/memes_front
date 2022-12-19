import React, { useState } from 'react';
import styled from 'styled-components';
import { TextField, Paper, Button } from '@mui/material';
import ExampleMeme from './ExampleMeme';

function InputForm({ isCreate }) {
  const [title, setTitle] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [firstMeme, setFirstMeme] = useState('');
  const [secondMeme, setSecondMeme] = useState('');
  const [thirdMeme, setThirdMeme] = useState('');
  // const [contents, setContents] = useState('');

  function onTitleChangeHandler(event) {
    setTitle(event.target.value);
  }

  // function onContentsChangeHandler(event) {
  //   setContents(event.target.value);
  // }

  return (
    <StCardPaper sx={{ p: 2 }}>
      <StH1>{isCreate ? '게시글 작성' : '게시글 수정'}</StH1>
      <TextField
        id="outlined-basic"
        label="제목"
        variant="outlined"
        size="small"
        value={title}
        onChange={(event) => onTitleChangeHandler(event)}
        sx={{ width: '100%', mb: 2, mt: 2 }}
      />
      <StImg src="img/testimg.jpg" alt="testimg" />
      <Button sx={{ float: 'right' }} variant="outlined">
        이미지 등록
      </Button>
      <StRadioNav>
        <ExampleMeme
          number={1}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          exampleMeme={firstMeme}
          setExampleMeme={setFirstMeme}
        />
        <ExampleMeme
          number={2}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          exampleMeme={secondMeme}
          setExampleMeme={setSecondMeme}
        />
        <ExampleMeme
          number={3}
          selectValue={selectValue}
          setSelectValue={setSelectValue}
          exampleMeme={thirdMeme}
          setExampleMeme={setThirdMeme}
        />
      </StRadioNav>
      {/* <StContents
        id="outlined-basic"
        label="내용"
        variant="outlined"
        value={contents}
        onChange={(event) => onContentsChangeHandler(event)}
        multiline
        inputProps={{
          style: {
            height: '300px',
          },
        }}
        sx={{ width: '100%', mb: '15px' }}
      /> */}
      <Button sx={{ float: 'right', ml: '15px' }} variant="outlined" color="error">
        취소
      </Button>
      <Button
        onClick={(event) => {
          event.preventDefault();
          console.log(event.target);
        }}
        sx={{ float: 'right' }}
        variant="outlined"
      >
        작성
      </Button>
    </StCardPaper>
  );
}

const StH1 = styled.h1`
  font-size: 36px;
`;

const StContents = styled(TextField)`
  height: 100%;
`;

const StRadioNav = styled.div`
  margin-top: 40px;
`;

const StCardPaper = styled(Paper)`
  margin: 0 auto;
  margin-top: 20px;
  width: auto;
  max-width: 1200px;
  text-align: center;
  position: relative;
  &::after {
    content: '';
    clear: both;
    display: table;
  }
`;

const StImg = styled.img`
  width: 100%;
  margin-bottom: 20px;
`;

export default InputForm;
