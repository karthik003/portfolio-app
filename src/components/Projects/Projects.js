import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import ProjectCard from './ProjectCard'

function Projects() {

    const projectsList = [
        {
            title:"Sapta",
            desc:"Sapta is an enterprise software for Think Tank idea growth and better decision-making process. The entire SaaS platform is built on React.js + Redux.",
            // gitLink:"",
            webLink:"https://www.sapta.io",
            techStack:'React.js, SpringBoot, PostgreSQL'
        },
        {
            title:"Park-World",
            desc:"A parking system which tells if any parking slot is empty or not. Also allows you to reserve your slot before hand. Has hardware components as well.",
            gitLink:"https://github.com/karthik003/Parking-System",
            // webLink:""
            techStack:'React.js, Node.js(Express.js), MongoDB, Thingspeak'
        },
        {
            title:"CodePlay",
            desc:"CodePlay is a live code-editor which allows devs to directly write HTML/CSS/JS on the browser and see results directly without saving.",
            gitLink:"https://github.com/karthik003/live-code-editor",
            webLink:"https://karthik003.github.io/live-code-editor/",
            techStack:'React.js'
        },
        {
            title:"NIDS Web-App",
            desc:"A Network Intrusion Detection System which uses Multi-Modal Decision Tree Classifier for efficient Intrusion Detection encapsulated by a Flask Web-App.",
            gitLink:"https://github.com/karthik003/nids-flask-webapp",
            techStack:'Python, Flask, NPL, ML, HTML, CSS'
            // webLink:""
        },
        {
            title:"Phishing Mails' Detection",
            desc:"A phishing Email Detector Web Preview that classifies mails from your inbox as phishing or not.",
            gitLink:"https://github.com/karthik003/Phishing-Email-Detection",
            // webLink:"",
            techStack:'Python, Flask, NPL, ML, HTML, CSS'        
        },
        {
            title:"Brain Tumor Detection Web-App",
            desc:"A Web-App for detecting Brain Tumor in Brain MRI images using Image Processing.",
            gitLink:"https://github.com/karthik003/brain-tumor-webapp",
            // webLink:""
            techStack:'Python, Flask, Image Processing, HTML, CSS'
        },
        {
            title:"SoulFarm",
            desc:"A Web-App that will basically act as a financial manager for all transaction,records storage etc. built considering the requirements of small stores.",
            gitLink:"https://github.com/karthik003/small-store-management",
            // webLink:"",
            techStack:'PHP, HTML, CSS, MySQL'
        },
        {
            title:"Seds Projects VIT Web",
            desc:"The main Website(PWA) of the SEDS Projects Chapter of VIT Vellore.",
            gitLink:"https://github.com/karthik003/SEDS-PROJECTS-Web",
            webLink:"http://vitprojects.sedsindia.org/",
            techStack:'React.js'
        },
        {
            title:"Universities' Data Visualization",
            desc:"A basic Data Visualization of Indian Universities.",
            gitLink:"https://github.com/karthik003/oneshot-ai-fe",
            webLink:"https://oneshot-ai-fe.herokuapp.com/",
            techStack:'React.js'
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
            <ProjectCard 
                title={project.title} 
                desc={project.desc} 
                gitLink={project.gitLink} 
                webLink={project.webLink}
                techStack={project.techStack}
            />
        </Grid>)
          })}
      </Grid>
    </Box>
    </div>
  )
}

export default Projects