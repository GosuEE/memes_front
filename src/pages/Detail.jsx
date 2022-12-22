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
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import WirteComment from '../components/Detail/WriteComment';
import { deleteMemes, getMemeById, giveAnswer } from '../redux/modules/postSlice';
import { useState } from 'react';
import CommentView from '../components/Detail/CommentView';
import CelebrationIcon from '@mui/icons-material/Celebration';
import CampaignIcon from '@mui/icons-material/Campaign';
function Detail() {
  const { memeId } = useParams();
  const [answerValue, setAnswerValue] = useState();
  const meme = useSelector((state) => state.meme.meme);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getMeme = useCallback(() => {
    dispatch(getMemeById(memeId));
  }, [dispatch, memeId]);

  async function onDeleteHandler() {
    await dispatch(deleteMemes(memeId));
    navigate('/');
  }

  useEffect(() => {
    getMeme();
  }, [getMeme]);
  return (
    <>
      <StBoxOuter>
        <StBox>
          <StTitle>
            <h1>
              <AccountCircleIcon /> {meme.nickname}
            </h1>
            <h1 style={titleStyle}>{meme.title}</h1>
          </StTitle>
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
            <Paper elevation={3}>
              {meme.img && <img src={meme.img} alt="img" style={inputStyle} />}
            </Paper>
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
          {meme.boardUser ? (
            <>
              {' '}
              <Link to="/" style={linkStyle}>
                <Button
                  onClick={() => dispatch(deleteMemes(memeId))}
                  sx={{ mt: 2, ml: '15px' }}
                  color="error"
                  variant="outlined"
                >
                  삭제
                </Button>
              </Link>
              <Link to={`/update/${memeId}`} style={linkStyle}>
                <Button sx={{ mt: 2, ml: '15px' }} variant="outlined">
                  수정
                </Button>
              </Link>
            </>
          ) : (
            <></>
          )}

          {meme.correct ? (
            <></>
          ) : (
            <RadioGroupOuter>
              <FormControl>
                <FormLabel id="demo-radio-buttons-group-label">
                  <CampaignIcon /> 정답을 선택해 주세요 <br /> <CampaignIcon /> 정답을 맞추시면 댓글
                  작성 및 확인이 가능합니다
                </FormLabel>

                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="1"
                    control={<Radio />}
                    label={meme.exam1}
                    onChange={(e) => {
                      setAnswerValue(1);
                    }}
                  />
                  <FormControlLabel
                    value="2"
                    control={<Radio />}
                    label={meme.exam2}
                    onChange={(e) => {
                      setAnswerValue(2);
                    }}
                  />
                  <FormControlLabel
                    value="3"
                    control={<Radio />}
                    label={meme.exam3}
                    onChange={(e) => {
                      setAnswerValue(3);
                    }}
                  />
                </RadioGroup>
                <Button
                  variant="outlined"
                  size="small"
                  type="button"
                  onClick={async () => {
                    const payload = {
                      answerValue: answerValue,
                      memeid: meme.id,
                    };
                    await dispatch(giveAnswer(payload));
                    dispatch(getMemeById(meme.id));
                  }}
                >
                  정답제출
                </Button>
              </FormControl>
            </RadioGroupOuter>
          )}

          {meme.correct ? (
            <>
              <h1 style={h1Style}>
                <CelebrationIcon style={iconStyle} /> 축하합니다 이제 댓글을 작성해 보세요{' '}
                <CelebrationIcon />
              </h1>
              <WirteComment /> <CommentView />
            </>
          ) : (
            <></>
          )}
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

const titleStyle = {
  marginTop: '20px',
  fontSize: '30px',
  fontWeight: 'bold',
};
const inputStyle = {
  maxWidth: '100%',
  maxHeight: `100%`,
};

const h1Style = {
  marginTop: '20px',
  color: 'red',
};

const linkStyle = {
  textDecoration: 'none',
};

const iconStyle = {
  transform: 'scaleX(-1)',
};

const StTitle = styled.div`
  max-width: 550px;
`;
