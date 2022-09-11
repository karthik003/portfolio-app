import React from 'react'
import { Typography } from '@mui/material';
import Typewriter from 'typewriter-effect';
import EmailIcon from '@mui/icons-material/Email';
// import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
// import { makeStyles } from '@mui/styles';

import './Intro.css'

  
function Intro() {
  return (
    <>
            <div>
                <Typography variant="h6"style={{fontFamily:"Montserrat, sans-serif"}}>VJ Karthik</Typography>
                <Typography variant="h6" style={{color:"grey",fontFamily:"Montserrat, sans-serif"}}>FrontEnd Developer</Typography>
            </div>
            <div>
                <Typography variant="h1" style={{fontFamily:"Montserrat, sans-serif"}}>
                    Hey there! <br />
                    <Typewriter
                        options={{
                            strings: ["I build stuff sometimes."],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                    </Typography>
                    {/* <a
                        href="mailto:vjk2018@gmail.com"
                        className="intro-contact"

                    >
                        <IconButton aria-label="settings">
                           <EmailIcon />
                           {"   " + "Say hi!"}
                        </IconButton>
                        
                    </a> */}
                    <br />
                    <a
                        href="mailto:vjk2018@gmail.com"
                        style={{textDecoration:"none"}}
                    >
                    <Button variant="outlined" startIcon={<EmailIcon />} color="success" className='hiButton' style={{border:"2px solid"}}>
                            Say hi!
                    </Button>
                    </a>
            </div>
    </>
  )
}

export default Intro