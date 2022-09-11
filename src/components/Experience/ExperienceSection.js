import React from 'react'
import { Typography } from '@mui/material';

function ExperienceSection(props) {
  return (
    <div style={{color:"black"}}>
        <Typography variant="h6" style={{fontFamily:"Montserrat, sans-serif"}}><i>{props.role}</i></Typography>
        {/* Responsibilities -  */}
        <br />
        {props.work}
        <ul style={{listStyleType:"square"}}>
            {props.responsibilities && 
            props.responsibilities.map((item)=>{
                return(
                <li>{item.value}</li> 
                )
            })
            }
        </ul>
    </div>
  )
}

export default ExperienceSection