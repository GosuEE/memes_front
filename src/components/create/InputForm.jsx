import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { TextField, Paper, Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ExampleMeme from './ExampleMeme';
import { createMeme, getMemeById, updateMemes } from '../../redux/modules/postSlice';

function InputForm({ isCreate }) {
  const [title, setTitle] = useState('');
  const [img, setImg] = useState('');
  const [selectValue, setSelectValue] = useState('');
  const [firstMeme, setFirstMeme] = useState('');
  const [secondMeme, setSecondMeme] = useState('');
  const [thirdMeme, setThirdMeme] = useState('');
  // const [contents, setContents] = useState('');
  const nowMeme = useSelector((state) => state.meme.meme);
  console.log(nowMeme);

  const { memeId } = useParams();
  const inputRef = useRef();

  const dispatch = useDispatch();

  function onTitleChangeHandler(event) {
    setTitle(event.target.value);
  }

  function uploadImg(event) {
    const formData = new FormData();
    formData.append('file', event.target.files[0]);
    setImg(URL.createObjectURL(event.target.files[0]));
  }

  function onUploadImgHandler() {
    inputRef.current.click();
  }

  function onSubmitHandler() {
    const meme = {
      title,
      img,
      answerValue: selectValue,
      exam1: firstMeme,
      exam2: secondMeme,
      exam3: thirdMeme,
    };
    dispatch(createMeme(meme));
  }

  function onUpdateHandler() {
    const meme = {
      title,
      img,
      answerValue: selectValue,
      exam1: firstMeme,
      exam2: secondMeme,
      exam3: thirdMeme,
      id: nowMeme.id,
    };
    dispatch(updateMemes(meme));
  }

  const initMeme = useCallback(() => {
    if (!isCreate) dispatch(getMemeById(memeId));
  }, [isCreate, dispatch, memeId]);

  useEffect(() => {
    initMeme();
  }, [initMeme]);

  useEffect(() => {
    if (!isCreate) {
      setTitle(() => nowMeme.title);
      setImg(() => nowMeme.img);
      setSelectValue(() => nowMeme.answerValue);
      setFirstMeme(() => nowMeme.exam1);
      setSecondMeme(() => nowMeme.exam2);
      setThirdMeme(() => nowMeme.exam3);
    }
  }, [isCreate, nowMeme]);

  // function onContentsChangeHandler(event) {
  //   setContents(event.target.value);
  // }

  return (
    <StCardPaper sx={{ p: 2 }}>
      <StH1>{isCreate ? '게시글 작성' : '게시글 수정'}</StH1>
      <TextField
        required
        id="outlined-basic"
        label="제목"
        variant="outlined"
        size="small"
        value={title}
        onChange={(event) => onTitleChangeHandler(event)}
        sx={{ width: '100%', mb: 2, mt: 2 }}
      />
      <StImgDiv>
        {img && <StImg src={img} alt="upload" />}
        <input
          style={{ display: 'none' }}
          ref={inputRef}
          name="imgUpload"
          type="file"
          accept="image/*"
          onChange={uploadImg}
        />
        <Button variant="outlined" onClick={() => onUploadImgHandler()} sx={{ margin: '0 auto' }}>
          이미지 등록
        </Button>
      </StImgDiv>
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
        onClick={isCreate ? onSubmitHandler : onUpdateHandler}
        sx={{ float: 'right' }}
        variant="outlined"
      >
        {isCreate ? '작성' : '수정'}
      </Button>
    </StCardPaper>
  );
}

const StImgDiv = styled.div`
  width: 100%;
`;

const StH1 = styled.h1`
  font-size: 36px;
`;

// const StContents = styled(TextField)`
//   height: 100%;
// `;

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
  max-width: 100%;
  margin-bottom: 20px;
`;

export default InputForm;
