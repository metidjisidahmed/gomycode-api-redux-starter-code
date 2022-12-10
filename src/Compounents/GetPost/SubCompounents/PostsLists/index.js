import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';


function PostItem({title , body}){
    return(
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar>{title[0].toUpperCase()}</Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={title}
                    secondary={
                        <React.Fragment>
                            {body}
                        </React.Fragment>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li" />
        </>

    )
}

export default function PostsLists(props) {

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>


            {
                props.posts.map(function(post){
                    return <PostItem  title={post.title} body={post.body} post={post}/>
                })
            }




        </List>
    );
}
