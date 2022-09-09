import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInBrowserIcon from "@mui/icons-material/OpenInBrowser";
import IconButton from '@mui/material/IconButton';
  
function ProjectCard(props) {
    const test = "https://www.google.com"
  return (
    <div>
    <Card sx={{ height:"250px" }}>
      {/* <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      /> */}
      <CardHeader
        action={
            <>
                <IconButton aria-label="settings">
                    <a href={props.gitLink?props.gitLink:test} style={{color:"black"}} target="_blank" rel="noreferrer"><GitHubIcon /></a>
                </IconButton>
                <IconButton aria-label="settings">
                    <a href={props.webLink?props.webLink:test} style={{color:"#3947C2"}} target="_blank" rel="noreferrer"><OpenInBrowserIcon /></a>
                </IconButton>
            </>
        }
        title={props.title}
        subheader="2022"
      />
      <CardContent >
        <Typography variant="body2" color="text.secondary" style={{textAlign:"justify"}}>
          {props.desc}
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default ProjectCard