import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styled from 'styled-components';
import { useParams, Link } from 'react-router-dom';

const StBoxInner = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 20px;
`;
const StBoxOuter = styled.div`
  text-align: center;
  margin: 0 auto;
  margin-top: 50px;
`;
const StBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  max-width: 1200px;
  margin: 0 auto;
`;

function List({ memes }) {
  return (
    <StBoxOuter>
      <StBox>
        {memes &&
          memes.map((meme) => (
            <Link to={`/detail/${meme.id}`}>
              <StBoxInner key={meme.id}>
                <Card sx={{ width: 330 }} style={cardStyle}>
                  <CardActionArea>
                    <Typography gutterBottom variant="h5" component="div">
                      {meme.title}
                    </Typography>
                    <CardMedia component="img" height="260" image={meme.img} alt="img" />
                    {/* <CardContent>
                    <Typography variant="body2" minWidth="330px" color="text.secondary">
                      {meme.contents}
                    </Typography>
                  </CardContent> */}
                  </CardActionArea>
                </Card>
              </StBoxInner>
            </Link>
          ))}
      </StBox>
    </StBoxOuter>
  );
}

export default List;

const cardStyle = {
  height: '400px',
};
