import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import React, { useCallback, useEffect, useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import CreateIcon from '@mui/icons-material/Create';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { Cookies, useCookies } from 'react-cookie';

function Header() {
  const [isLogined, setIsLogined] = useState(false);
  const [cookies, setCookie, removeCookie] = useCookies(['accessToken']);
  const navigate = useNavigate();

  // const toggleIsLogined = useCallback(() => {
  //   if (cookies.accessToken) setIsLogined(true);
  //   else setIsLogined(false);
  //   console.log(isLogined);
  // }, [isLogined, cookies]);

  // useEffect(() => {
  //   toggleIsLogined();
  // }, [isLogined]);

  useEffect(() => {
    console.log('useEffect');
    console.log(cookies.accessToken);
    if (cookies.accessToken) setIsLogined(true);
    else setIsLogined(false);
  }, [cookies.accessToken]);

  function onClickLogin() {
    navigate('/signin');
  }

  async function onClickLogout() {
    await removeCookie('accessToken');
    navigate('/');
  }

  return (
    <StBox>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Link to={`/`} style={LinkStyle}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <HomeIcon />
                HOME
              </IconButton>
            </Link>

            <Link to={`/create`} style={LinkStyle}>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <CreateIcon />
                WRITE
              </IconButton>
            </Link>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
            <Button color="inherit" onClick={isLogined ? onClickLogout : onClickLogin}>
              {isLogined ? 'Logout' : 'Login'}
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    </StBox>
  );
}

export default Header;

const LinkStyle = {
  textDecoration: 'none',
  color: 'white',
};
const StBox = styled.div`
  margin-top: 50px;
`;
