import React from 'react';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import styled from 'styled-components';
import HomeIcon from '@mui/icons-material/Home';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const StyledAppBar = styled(AppBar)`
  && {
    background-color: rgba(24, 17, 213, 0.5);
    color: #445b87;
    font-size: 1rem;
    font-weight: 800;
    margin-top: 20px;
  }
`;

const Header = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <StyledAppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="Main Tabs">
          <Tab label="Logo" icon={<DriveFileRenameOutlineIcon />} />
          <Tab label="Home" icon={<HomeIcon />} />

          <Tab label="Write" icon={<DriveFileRenameOutlineIcon />} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button color="inherit">Login</Button>
        </Tabs>
      </StyledAppBar>
    </>
  );
};

export default Header;
