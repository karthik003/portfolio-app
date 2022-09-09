import React from 'react'
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import ExperienceSection from '../Experience/ExperienceSection';

// const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
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
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }
  

function Experience() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  const tabItems=[
    {
      companyName:'Vidrona',
      role:'Front End Development Intern'
    },
    {
      companyName:'Skin Lens',
      role:'Front End Freelancer'
    },
    {
      companyName:'Omniroads',
      role:'Front End Developer'
    },
  ]
  return (
    <div>
        <Typography variant="h5" style={{fontFamily:"Montserrat, sans-serif"}}>My Experiences</Typography>
        <br />
        <Box
        // sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 224 }}
        >
                <Tabs
                    // orientation={!isHorizontal ? "vertical" : null}
                    // variant={isHorizontal ? "fullWidth" : "scrollable"}
                    // scrollButtons={!isHorizontal}
                    // allowScrollButtonsMobile={!isHorizontal}
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    {tabItems && 
                    tabItems.map((tab,index)=>{
                        return(<Tab label={tab.companyName} {...a11yProps(index)} key={index}/>)                    
                    })}
                </Tabs>
                    {tabItems && 
                    tabItems.map((item,index)=>{
                        return(
                        <TabPanel value={value} index={index} key={index}>
                            <ExperienceSection companyName={item.companyName} role={item.role} work={item.work}/>
                        </TabPanel>)                    
                    })}
        </Box>

    </div>
  )
}

export default Experience