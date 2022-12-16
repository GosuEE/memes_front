import React from 'react';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import PersonIcon from '@mui/icons-material/Person';
import styled from 'styled-components';

const StBoxOuter = styled.div`
margin-top20px`;
const StBox = styled.div``;
function LoginHeader() {
  return (
    <>
      <StBoxOuter>
        <StBox>
          <AccountCircleIcon></AccountCircleIcon>???님 반갑습니다
        </StBox>
      </StBoxOuter>
    </>
  );
}

export default LoginHeader;
