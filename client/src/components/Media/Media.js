import React from "react";
import fireflies from './music/fireflies.mp3';
import piano from './music/fort-st-james.mp3';
import meditation from './music/meditation.mp3';
import { ButtonGroup, Button, Box } from '@mui/material';
import "../../global-styles/global.css";


function Media() {

    const audio = new Audio(fireflies, piano, meditation);
    const playMusic = () => {
        audio.play()
    };

    const pauseMusic = () => {
        audio.pause();
    }

    const stopMusic = () => {
        audio.pause();
    } 

    return (
      <div className="Media">
      <Box className="player">
     
        {/*} <button onClick={ () => playMusic(fireflies) }>PLAY AUDIO</button>
          <button onClick={ () => playMusic(piano) }>PLAY AUDIO</button>
    <button onClick={ () => playMusic(meditation) }>PLAY AUDIO</button>*/}
        <ButtonGroup
          variant="contained"
          aria-label="outlined button group"
        >
          <Button
            onClick={playMusic}
            alt="Music from #Uppbeat (free for Creators!):
            https://uppbeat.io/t/ambient-boy/fireflies
            License code: XOGJXYD9YNZBJAQ5"
          >
            Play
          </Button>
          <Button
            
            onClick={pauseMusic}
          >
            Pause
          </Button>
          <Button
            onClick={stopMusic}
          >
            Stop
          </Button>
        </ButtonGroup>
        </Box>
      </div>
    );
  }
        
export default Media;