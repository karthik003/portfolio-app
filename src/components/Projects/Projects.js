import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import ProjectCard from './ProjectCard'

function Projects() {

    const projectsList = [
        {
            title:"Sapta",
            desc:"Sapta is an enterprise software for Think Tank idea growth and better decision-making process. The entire SaaS platform is built on React.js + Redux",
            gitLink:"https://www.figma.com"
        },
        {
            title:"SkinLens",
            desc:"Sapta, an enterprise software for Think Tank idea growth and better decision-making process. The entire SaaS platform is built on React.js + Redux"
        },
        {
            title:"Live Code Editor",
            desc:"Sapta, an enterprise software for Think Tank idea growth and better decision-making process. The entire SaaS platform is built on React.js + Redux"
        },
        {
            title:"Network Intrusion Detection System Web-App",
            desc:"Sapta, an enterprise software for Think Tank idea growth and better decision-making process. The entire SaaS platform is built on React.js + Redux"
        },
        {
            title:"Phishing Mails' Detection",
            desc:"Sapta, an enterprise software for Think Tank idea growth and better decision-making process. The entire SaaS platform is built on React.js + Redux"
        },
        {
            title:"Brain Tumor Detection Web-App",
            desc:"Sapta, an enterprise software for Think Tank idea growth and better decision-making process. The entire SaaS platform is built on React.js + Redux"
        },
        {
            title:"Small Store Management Web-App",
            desc:"Sapta, an enterprise software for Think Tank idea growth and better decision-making process. The entire SaaS platform is built on React.js + Redux"
        },
        {
            title:"Seds Projects VIT Web-App",
            desc:"Sapta, an enterprise software for Think Tank idea growth and better decision-making process. The entire SaaS platform is built on React.js + Redux"
        },
        {
            title:"Indian Colleges Viz",
            desc:"Sapta, an enterprise software for Think Tank idea growth and better decision-making process. The entire SaaS platform is built on React.js + Redux"
        },
    ]
  return (
    <div>
        <Typography variant="h5" style={{fontFamily:"Montserrat, sans-serif"}}>My Software Creations</Typography>
        <br />
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {projectsList && 
        projectsList.map((project)=>{
        return(
        <Grid item xs={4}>
            <ProjectCard title={project.title} desc={project.desc} gitLink={project.gitLink} webLink={project.webLink}/>
        </Grid>)
          })}
      </Grid>
    </Box>
    </div>
  )
}

export default Projects