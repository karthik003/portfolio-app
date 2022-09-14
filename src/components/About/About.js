import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PropTypes from 'prop-types';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';

import vjk from '../../assets/vjk-dp.jpeg'

import './About.css'

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

function About() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div style={{fontFamily:"'Roboto', sans-serif", width:"100%"}}>
        <Box>

            <Tabs
              value={value}
              onChange={handleChange}
              textColor="primary"
              indicatorColor="primary"
              aria-label="secondary tabs example"
              centered
            >
              <Tab label={"About Me"} {...a11yProps(0)} key={0} />
            </Tabs>
            <TabPanel value={value} index={0} key={0} >
            <Box>
              <Grid 
                container
                spacing={0}
              >
                <Grid item xs={12} sm={12} md={6} lg={6} style={{justifyContent:"center", display:"flex"}}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    component="img"
                    alt="this is me"
                    height="300"
                    image={vjk}
                  />
                  <CardActions style={{width:"100%", display:"flex",justifyContent:"space-between"}}>
                    <IconButton size="large">
                    <a href="https://www.github.com/karthik003" style={{color:"black"}} target="_blank" rel="noopener noreferrer"><GitHubIcon /></a>
                </IconButton>
                <IconButton size="large">
                    <a href="https://www.linkedin.com/in/karthik-v-j-737726169/" style={{color:"#0077B5"}} target="_blank" rel="noopener noreferrer"><LinkedInIcon /></a>
                </IconButton>

                  </CardActions>
                </Card>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <p>
                  I am Computer Science graduate from <b>Vellore Institute of Technology (VIT), Vellore</b>.<br /> 
                      Currently, I'm working with <b>Cognizant</b> as a Programmer Analyst (Java FullStack).
                  </p>
                      
                      <br />
                      Here are some technologies I have been working with:
                      <br />
                      <div style={{display:"flex"}}>
                        <div style={{float:"left"}}>
                          <ul style={{listStyleType:"square"}}>
                            <li>React.js</li>
                            <li>Redux</li>
                            <li>Javascript ES6+</li>
                            <li>Angular</li>
                            <li>HTML & CSS</li>
                          </ul>
                        </div>
                        <div style={{float:"left"}}>
                          <ul style={{listStyleType:"square"}}>
                            <li>Node.js</li>
                            <li>Express.js</li>
                            <li>Java</li>
                            <li>Python</li>
                            <li>Flask</li>
                          </ul>
                        </div>
                        <div style={{float:"left"}}>
                          <ul style={{listStyleType:"square"}}>
                            <li>MySQL</li>  
                            <li>MongoDB</li>
                            <li>Image Processing</li>
                          </ul>
                        </div>
                      </div>
                      <br/>
                      <div style={{width:"100%"}}>
                          Outside of work, 
                          I'm interested in following the developments of tech.<br/>
                          I am a speedcuber and even co-founded a club in my university.<br />
                          I'm heavily devoted to F1 and follow every single race.
                      </div>
                </Grid>

              </Grid>
            </Box>
            </TabPanel>
        </Box>
    </div>
  )
}

export default About