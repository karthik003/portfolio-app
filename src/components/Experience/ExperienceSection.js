import React from 'react'
import { Typography } from '@mui/material';

function ExperienceSection(props) {
  return (
    <div>
        <Typography variant="h6" style={{fontFamily:"Montserrat, sans-serif"}}>{props.role}</Typography>
        <br />
        Work - {props.work}
    </div>
  )
}

export default ExperienceSection