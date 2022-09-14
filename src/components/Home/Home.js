import React,{useEffect} from 'react'
import { Typography } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import './Home.css'

import Projects from '../Projects/Projects';
import Experience from '../Experience/Experience';
import Intro from '../Intro/Intro';
import Blogs from '../Blogs/Blogs';

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
  
export default function Home() {
    const [value, setValue] = React.useState(0);

    useEffect(() => {
      setValue(0)
    }, []);
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const tabItems=[
        {
            title:"Intro",
            component:<Intro />
        },
        {
            title:"Projects",
            component:<Projects />
        },
        {
            title:"Experiences",
            component:<Experience />
        },
        {
            title:"Blogs",
            component:<Blogs />
        },
    ]
    return (
        <>
            <div className="landingBox">
            <Box>
                    <Tabs
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        value={value}
                        onChange={handleChange}
                        aria-label="Vertical tabs example"
                        sx={{ borderRight: 1, borderColor: 'divider' }}
                    >
                        {tabItems && 
                        tabItems.map((tab,index)=>{
                            return(<Tab label={tab.title} {...a11yProps(index)} key={index}/>)                    
                        })}
                    </Tabs>
                    {tabItems && 
                    tabItems.map((tab,index)=>{
                        return(
                        <TabPanel value={value} index={index} key={index}>
                            {tab.component}
                        </TabPanel>)                    
                    })}
            </Box>
            </div>
        </>
    )
}
