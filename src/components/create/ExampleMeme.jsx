import React from 'react';
import { TextField } from '@mui/material';
import styled from 'styled-components';

function ExampleMeme({ number, selectValue, setSelectValue, exampleMeme, setExampleMeme }) {
  function onTextChange(event) {
    setExampleMeme(event.target.value);
  }

  function onRadioChange(event) {
    setSelectValue(event.target.value * 1);
    console.log(selectValue);
    console.log(event.target.value);
  }

  return (
    <StNav>
      <StRadio
        type="radio"
        id={number}
        name="memes"
        value={number}
        checked={selectValue === number}
        onChange={(event) => onRadioChange(event)}
      />
      <StLabel htmlFor={number}>{number}</StLabel>
      <TextField
        id="outlined-basic"
        label={`${number}번`}
        variant="outlined"
        size="small"
        value={exampleMeme}
        onChange={(event) => onTextChange(event)}
        sx={{ width: '60%', mb: 2 }}
      />
    </StNav>
  );
}

const StRadio = styled.input`
  width: 20px;
  height: 20px;
`;

const StLabel = styled.label`
  font-size: 20px;
  margin-right: 10px;
`;

const StNav = styled.div`
  margin-top: 10px;
`;

export default ExampleMeme;
