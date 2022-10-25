import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { orange } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Divider from '@mui/material/Divider';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';

export default function InvitedCard(props) {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
      <CardHeader
        avatar={
          <Avatar
          sx={{ width: 56, height: 56, bgcolor: orange[800] }} aria-label="recipe">
            {props.data.contactFirstName[0]}
          </Avatar>
        }
        // action={
        //   <IconButton aria-label="settings">
        //     <MoreVertIcon />
        //   </IconButton>
        // }
        title={props.data.contactFirstName}
        subheader={dateFormat(new Date(props.data.dateCreated))}
      />
      <Divider/>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '1em'}}>
            <RoomOutlinedIcon /> 
            <Typography variant="body2" sx={{padding: '0.3em', paddingRight: '1em'}}>
                {props.data.suburb}
            </Typography>
            <WorkOutlineIcon />
            <Typography variant="body2" sx={{padding: '0.6em', paddingRight: '1em'}}>
                {props.data.category}
            </Typography>
            <Typography variant="body2" sx={{padding: '0.6em', paddingRight: '1em'}}>
                Job ID:{props.data.id}
            </Typography>
        </Box>
        <Divider/>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '1em'}}>
        <Typography variant="body2" sx={{padding: '0.3em', paddingRight: '1em'}}>
                {props.data.description}
            </Typography>
        </Box>
        <Divider/>
        <Box sx={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingTop: '1em'}}>
        <Button size="small" sx={{backgroundColor: orange[800], 
            color: 'white', margin: '0.5em', padding: '1em', 
            fontVariant: 'bold',
            '&:hover': {
                backgroundColor: orange[700],
                // color: '#3c52b2',
                }
            }}>Accept</Button>
        <Button size="small" sx={{backgroundColor: 'lightgray', color: 'black', margin: '0.5em', padding: '1em', fontVariant: 'bold',
        '&:hover': {
            backgroundColor: 'rgba(1,1,1,0.1)',
            // color: '#3c52b2',
            }}}>Decline</Button>
        </Box>
      </CardContent>
    </Card>
  );
}

function dateFormat(date: Date): string {
    const mes = getMonth(date.getMonth());
    return `${mes} ${date.getDate()} @ ${date.getHours()}:${date.getMinutes()}`
}

function getMonth(value): string {

    const months = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
    ]

    return months[value];
}