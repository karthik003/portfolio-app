import React from 'react'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import BlogCard from './BlogCard';

function Blogs() {

    const blogsList=[
        {
            title:'Callbacks with Node',
            desc:'What are callbacks, man?',
            webLink:'https://medium.com/@vjk2018/callbacks-with-node-83c78cfbc582',
            publishedDate:'Oct 4, 2020'
        },
        {
            title:'Just what is CORS ?',
            desc:'I keep getting this CORS error. Explain pls?',
            webLink:'https://medium.com/@vjk2018/just-what-is-cors-ad8c70078c39',
            publishedDate:'Sep 29, 2020'
        },
        {
            title:'Which club/chapter to join?',
            desc:"Do read if your uni/college has various clubs/chapters & you're clueless on where to go.",
            webLink:'https://medium.com/@vjk2018/how-do-you-decide-which-club-chapter-to-join-c342c631a913',
            publishedDate:'Nov 27, 2019'
        },

    ]
  return (
    <div>
        <Typography variant="h5" style={{fontFamily:"Montserrat, sans-serif"}}>My Blogs</Typography>
        <br />
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {blogsList && 
        blogsList.map((blog)=>{
        return(
        <Grid item xs={4}>
            <BlogCard title={blog.title} desc={blog.desc} webLink={blog.webLink} publishedDate={blog.publishedDate}/>
        </Grid>)
          })}
      </Grid>
    </Box>

    </div>
  )
}

export default Blogs