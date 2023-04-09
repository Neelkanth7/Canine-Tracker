import { createMuiTheme, ThemeProvider, makeStyles } from '@material-ui/core/styles';
import React, { useState, useEffect } from 'react';

import {Typography} from '@material-ui/core'; 
import NavBar from './components/NavBar'
import Grid from './components/Grid'
import Footer from './components/Footer'
import './App.css';
//changes to imports 
import DoorBackSharpIcon from '@mui/icons-material/DoorBackSharp';
import PetsSharpIcon from '@mui/icons-material/PetsSharp';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


const theme = createMuiTheme({
  palette: {
    primary: {
      main:"#2e1667",
    },
    secondary: {
      main:"#c7d8ed",
    },
  },
  typography: {
    fontFamily: [
      'Roboto'
    ],
    h4: {
      fontWeight: 600,
      fontSize: 28,
      lineHeight: '2rem',
      },
    h5: {
      fontWeight: 100,
      lineHeight: '2rem',
    },
  },
});

const styles = makeStyles({
  wrapper: {
    width: "65%",
    margin: "auto",
    textAlign: "center"
  },
  bigSpace: {
    marginTop: "5rem"
  },
  littleSpace:{
    marginTop: "2.5rem",
  },
  grid:{
    display: "flex", 
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap", 
  },
})

function App() {
  const classes = styles(); 
  
    
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <NavBar/>
        <div className={classes.wrapper}>
          <Typography variant="h4" className={classes.bigSpace} color="primary">
             At CANINE OUTDOOR ACTIVITY TRACKER we are passionate about your dog.
          </Typography>
          <Typography variant="h5" className={classes.littleSpace} color="primary">
          The proposed system aims to provide dog owners with useful information about their dog's outdoor activities. The system will track the time of day and length of time their dog is outside and provide activity estimates based on movement for each outdoor session. It will also monitor the weather forecast and suggest if the dog should go outside soon, and keep records of the average time outside based on the time of day and weather conditions. Additionally, the system will send a text notification to the owner when their dog is ready to come inside. Overall, the system will provide a comprehensive monitoring solution to dog owners, enabling them to stay informed and make informed decisions about their pet's outdoor activities.          </Typography>
        </div>
        <div className={`${classes.grid} ${classes.bigSpace}`}>
          <Grid icon={<WbSunnyIcon style={{fill: "#4360A6", height:"125", width:"125"}}/>}  title="Weather" />
          
          <Grid icon={<PetsSharpIcon style={{fill: "#449A76", height:"125", width:"125"}}/>} title="Steps" btnTitle="Show me More"/>
          <Grid icon={<DoorBackSharpIcon style={{fill: "#D05B2D", height:"125", width:"125"}}/>}  title="Door Status" btnTitle="Show me More"/>
        </div>
        <div className={classes.bigSpace}>
          <Footer/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
