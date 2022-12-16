import React from 'react';
import styled from 'styled-components';
import { Paper } from '@mui/material';
import MemeCard from '../components/home/MemeCard';

function Home() {
  return (
    <StCardPaper elevation={3} sx={{ p: 2 }}>
      <MemeCard
        title="제목입니다"
        contents="본문입니다"
        nickName="GosuEE"
        img="/static/images/cards/paella.jpg"
        createdAt="2022/12/16"
      />
      <MemeCard
        title="제목입니다"
        contents="본문입니다"
        nickName="GosuEE"
        img="/static/images/cards/paella.jpg"
        createdAt="2022/12/16"
      />
      <MemeCard
        title="제목입니다"
        contents="본문입니다"
        nickName="GosuEE"
        img="/static/images/cards/paella.jpg"
        createdAt="2022/12/16"
      />
      <MemeCard
        title="제목입니다"
        contents="본문입니다"
        nickName="GosuEE"
        img="/static/images/cards/paella.jpg"
        createdAt="2022/12/16"
      />
      <MemeCard
        title="제목입니다"
        contents="본문입니다"
        nickName="GosuEE"
        img="/static/images/cards/paella.jpg"
        createdAt="2022/12/16"
      />
    </StCardPaper>
  );
}
const StCardPaper = styled(Paper)`
  margin: 0 auto;
  margin-top: 20px;
  width: auto;
  max-width: 1200px;
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default Home;
