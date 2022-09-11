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
      companyName:'Omniroads',
      role:'Front End Developer',
      responsibilities:[
        {
          value:'Worked on the mainstream product named, Sapta.'
        },
        {
          value:'Built the entire Sapta portfolio website.'
        },
        {
          value:'Sapta is an enterprise software for Think Tank idea growth and better decision-making process. Entire Frontend was coded on React(JS)'
        },
        {
          value:'Wrote modular, reusable, clean, efficient and highly scalable JS(React) code.'
        },
        {
          value:'Built a plethora of features including Innovation, Business-Cases, OKR, Strategy, Customer Hub, Payment Integration.'
        },
        {
          value:'Collaborated with experienced cross-disciplinary people to conceive, design, and bring innovative features and services to market.'
        },
        {
          value:'Involved in various Pair-Programming sessions as both the navigator and the driver.'
        },
        {
          value:'Initially was part of the FrontEnd team for about 6 months, later for about 1 year was the sole frontend developer to handle an enormously big and complex UI codebase.'
        },
        {
          value:'Interviewed multiple new-joinees and review submitted code regularly.'
        },

      ]

    },
    {
      companyName:'Skin Lens',
      role:'Front End Freelancer',
      responsibilities:[
        {
          value:'Worked on the mainstream product named after the company, SkinLens.'
        },
        {
          value:'My role was to code down the UI (entirely responsive) based on a slightly complex Figma sketch.'
        },
        {
          value:'The idea was to fetch input image which would go through a backend ML pipeline and return information on skin diseases.'
        },
        {
          value:'Improved UI speed, efficiency and finally was able to convert it into a PWA.'
        },

      ]
  
    },
    {
      companyName:'Vidrona',
      role:'Front End Development Intern',
      responsibilities:[
      {
        value:'Worked on the mainstream product named vNautilus.'
      },
      {
        value:'My role was to fetch the data and display them in the form of reports, charts, wiggly components, cool stuff basically.'
      },
      {
        value:'Handled changing data constantly as it was keen to change frequently.'
      },
    ]
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
                            <ExperienceSection companyName={item.companyName} role={item.role} work={item.work} responsibilities={item.responsibilities}/>
                        </TabPanel>)                    
                    })}
        </Box>

    </div>
  )
}

export default Experience