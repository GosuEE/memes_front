import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import styled from 'styled-components';

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

function List() {
  return (
    <>
      <StBoxOuter>
        <StBox>
          <StBoxInner>
            <Card sx={{ maxWidth: 330 }}>
              <CardActionArea>
                <Typography gutterBottom variant="h5" component="div">
                  제목
                </Typography>
                <CardMedia
                  component="img"
                  height="260"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="이미지가없음"
                />
                <CardContent>
                  <Typography variant="body2" minWidth="330px" color="text.secondary">
                    내용
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </StBoxInner>
          <StBoxInner>
            <Card sx={{ maxWidth: 330 }}>
              <CardActionArea>
                <Typography gutterBottom variant="h5" component="div">
                  제목
                </Typography>
                <CardMedia
                  component="img"
                  height="260"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="이미지가없음"
                />
                <CardContent>
                  <Typography variant="body2" minWidth="330px" color="text.secondary">
                    내용
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </StBoxInner>

          <StBoxInner>
            <Card sx={{ maxWidth: 330 }}>
              <CardActionArea>
                <Typography gutterBottom variant="h5" component="div">
                  제목
                </Typography>
                <CardMedia
                  component="img"
                  height="260"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="이미지가없음"
                />
                <CardContent>
                  <Typography variant="body2" minWidth="330px" color="text.secondary">
                    내용
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </StBoxInner>

          <StBoxInner>
            <Card sx={{ maxWidth: 330 }}>
              <CardActionArea>
                <Typography gutterBottom variant="h5" component="div">
                  제목
                </Typography>
                <CardMedia
                  component="img"
                  height="260"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="이미지가없음"
                />
                <CardContent>
                  <Typography variant="body2" minWidth="330px" color="text.secondary">
                    내용
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </StBoxInner>

          <StBoxInner>
            <Card sx={{ maxWidth: 330 }}>
              <CardActionArea>
                <Typography gutterBottom variant="h5" component="div">
                  제목
                </Typography>
                <CardMedia
                  component="img"
                  height="260"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="이미지가없음"
                />
                <CardContent>
                  <Typography variant="body2" minWidth="330px" color="text.secondary">
                    내용
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </StBoxInner>

          <StBoxInner>
            <Card sx={{ maxWidth: 330 }}>
              <CardActionArea>
                <Typography gutterBottom variant="h5" component="div">
                  제목
                </Typography>
                <CardMedia
                  component="img"
                  height="260"
                  image="/static/images/cards/contemplative-reptile.jpg"
                  alt="이미지가없음"
                />
                <CardContent>
                  <Typography variant="body2" minWidth="330px" color="text.secondary">
                    내용
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </StBoxInner>
        </StBox>
      </StBoxOuter>
    </>
  );
}

export default List;
