import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import Form1 from '../../components/studentForms/form1';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function Pie() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [page, setPage] = React.useState(0);

  const handlePage = (event) => {
    event.preventDefault()
    const newValue = value+1
    setPage(newValue);
    handleChangeIndex(newValue)
  };
    const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
      <AppBar position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" disabled={page < 1} {...a11yProps(1)} />
          <Tab label="Item Three" disabled={page < 2}{...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <Box
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
            <Box display="flex" mt="20px">
              <Form1/>
            </Box>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
                      <Box display="flex" mt="20px">
              <Button type="submit" onClick={handlePage} color="secondary" variant="contained">
                Next
              </Button>
            </Box>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
                      <Box display="flex" mt="20px">
              <Button type="submit" color="secondary" variant="contained">
                Create New User
              </Button>
            </Box>
        </TabPanel>
      </Box>
    </Box>
  );
}
