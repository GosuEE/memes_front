import Box from '@mui/material/Box';
import { AppBar, Tabs, Tab } from '@material-ui/core';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import React from 'react';

const Header2 = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="Main Tabs">
          <Tab label="Logo" icon={<DriveFileRenameOutlineIcon />} />
          <Tab label="Home" icon={<HomeIcon />} />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
          <Button color="inherit">Login</Button>
        </Tabs>
      </AppBar>
    </Box>
  );
};

export default Header2;
