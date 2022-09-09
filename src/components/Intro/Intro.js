import React from 'react'
import { Typography } from '@mui/material';

function Intro() {
  return (
    <>
            <div>
                <Typography variant="h6"style={{fontFamily:"Montserrat, sans-serif"}}>VJ Karthik</Typography>
                <Typography variant="h6" style={{color:"grey",fontFamily:"Montserrat, sans-serif"}}>FrontEnd Developer</Typography>
            </div>
            <div>
                <Typography variant="h1" style={{fontFamily:"Montserrat, sans-serif"}}>
                    Hey there! <br />I’m a creative FrontEnd Web Developer. 
                </Typography>
            </div>
    </>
  )
}

export default Intro