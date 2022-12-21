import React, { useEffect, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { checkDuplicationId, checkDuplicationNickname, signUp } from '../redux/modules/loginSlice';
const theme = createTheme();

function SignUp() {
  const [checkId, setCheckId] = useState(false);
  const [checkNick, setCheckNick] = useState(false);
  const [disable, setDisable] = useState(true);

  const duplicate = useSelector((state) => state.login.duplicate);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userName, setUserName] = useState('');
  const [nickName, setNickName] = useState('');
  const [password, setPassword] = useState('');

  // const [inputValue, setInputValue] = useState({
  //   userName: '',
  //   nickName: '',
  //   password: '',
  // });

  // const inputChangeHandler = (e) => {
  //   const { name, value } = e.target;
  //   setInputValue({
  //     ...inputValue,
  //     [name]: value,
  //   });
  // };

  function userNameChangeHandler(event) {
    setUserName(event.target.value);
  }
  function nickNameChangeHandler(event) {
    setNickName(event.target.value);
  }
  function passwordChangeHandler(event) {
    setPassword(event.target.value);
  }
  const signUpHandler = (event) => {
    event.preventDefault();
    const account = {
      username: userName,
      nickname: nickName,
      password: password,
    };
    dispatch(signUp(account));
    navigate('/');
  };

  async function onCheckId() {
    await dispatch(checkDuplicationId(userName));
    console.log(duplicate.idDuplicate);
  }

  async function onCheckNick() {
    await dispatch(checkDuplicationNickname(nickName));
  }

  useEffect(() => {
    setCheckId((prev) => (prev = !duplicate.idDuplicate));
    setCheckNick((prev) => (prev = !duplicate.nickDuplicate));
    // console.log(checkId, checkNick);
    if (!duplicate.idDuplicate && !duplicate.nickDuplicate) setDisable(false);
  }, [duplicate.idDuplicate, duplicate.nickDuplicate]);

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            회원가입
          </Typography>
          <Box
            component="form"
            noValidate
            onSubmit={(event) => signUpHandler(event)}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="userName"
                  required
                  fullWidth
                  id="userName"
                  label="User Name"
                  value={userName}
                  onChange={(event) => userNameChangeHandler(event)}
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="nickName"
                  label="Nick Name"
                  name="nickName"
                  value={nickName}
                  onChange={(event) => nickNameChangeHandler(event)}
                  autoComplete="family-name"
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(event) => passwordChangeHandler(event)}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="Re_enter_password"
                  label="Re Enter Password"
                  type="password"
                  id="Re_enter_password"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Sign Up
            </Button>
            <Button variant="contained" onClick={onCheckId}>
              아이디 중복 확인
            </Button>
            <Button variant="contained" onClick={onCheckNick}>
              닉네임 중복 확인
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/signin">이미 회원 이신가요? 로그인 하러 가기</Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default SignUp;
