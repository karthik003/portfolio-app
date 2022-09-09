import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import BookIcon from '@mui/icons-material/Book';
import IconButton from '@mui/material/IconButton';

function BlogCard(props) {
  return (
    <div>
        <Card sx={{ height:"200px" }}>
        <CardHeader
            action={
                <>
                    <IconButton aria-label="settings">
                        <a href={props.webLink} style={{color:"#389248"}} target="_blank" rel="noreferrer"><BookIcon /></a>
                    </IconButton>
                </>
            }
            title={props.title}
            subheader={props.publishedDate}
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

export default BlogCard