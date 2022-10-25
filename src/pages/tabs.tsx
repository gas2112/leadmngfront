import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import InvitedCard from '../components/InvitedCard'
import { orange } from '@mui/material/colors';

import { getAllLeads } from '../services/lead';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {/* <Typography> */}
            {children}
          {/* </Typography> */}
        </Box>
      )}
    </Box>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props) {
    const [cards,setCards] = React.useState(null)
    const [value, setValue] = React.useState(0);

    const loadCards = async () => { 
      
        if(cards == null){
            const apiCards = getAllLeads();
            console.log(apiCards);
            setCards(props.invitedFakeData);
        }
    }
    
  React.useEffect(() => {
    if(cards == null){
      loadCards()
      // const apiCards = getAllLeads();
      // console.log(apiCards);
      // setCards(props.invitedFakeData);
  }
  },[])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container maxWidth="md" sx={{backgroundColor: 'whitesmoke'}}>
        <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} variant="fullWidth" onChange={handleChange} aria-label="basic tabs example" centered
        sx={{
            backgroundColor: 'white',
            "& .MuiTabs-indicator": {
                backgroundColor: orange[800],
                height: 3,
              },
            "& .MuiTab-root.Mui-selected": {
            color: 'orange',
            // borderBottom: '3px solid red',
          }
          }}>
          <Tab label="Invited" {...a11yProps(0)} />
          <Tab label="Accepted" {...a11yProps(1)} />
          
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        {!!cards && <InvitedCard data={cards[0]}/>}
        {/* {JSON.stringify(invitedFakeData)} */}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {JSON.stringify(props.invitedFakeData)}
      </TabPanel>
    </Box>
      </Container>
    
  );
}


export const getStaticProps = async () => {
    let invitedFakeData = [
            {
                contactFirstName : 'Bill',
                contactFullName: '',
                contactPhoneNumber : '',
                contactEmail: '',
                dateCreated: "01/04/2022 14:37",
                suburb: 'Yanderra 2574',
                category: 'Painters',
                id: '5577421',
                description: 'Need to paint 2 aluminum windows and a sliding glass door',
                price: '',
                status: 'pending',
            },
            {
                contactFirstName : 'Craig',
                contactFullName: '',
                contactPhoneNumber : '',
                contactEmail: '',
                dateCreated: "04/01/2022 13:15",
                suburb: 'Woolooware 2230',
                category: 'Interior Painters',
                id: '5588872',
                description: 'Internal walls 2 colours',
                status: 'pending',
                price: '',
            },
        ]
    
        return { props : { invitedFakeData : invitedFakeData} }
}