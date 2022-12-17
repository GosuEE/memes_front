import Box from '@mui/material/Box';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import React from 'react';
import styled from 'styled-components';

function Header() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BoxOuter>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="Main Tabs">
            <Tab label="Home" icon={<HomeIcon />} />
            <Tab label="Write" icon={<DriveFileRenameOutlineIcon />} />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} />
            <Button color="inherit">Logout</Button>
          </Tabs>
        </AppBar>
      </Box>
    </BoxOuter>
  );
}

export default Header;

const BoxOuter = styled.div`
  margin-top: 30px;
`;
