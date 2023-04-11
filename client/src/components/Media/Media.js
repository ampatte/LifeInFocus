import React from "react";
import fireflies from './music/fireflies.mp3';
import piano from './music/fort-st-james.mp3';
import meditation from './music/meditation.mp3';
import { ButtonGroup, Button } from '@mui/material';


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
        {/*} <button onClick={ () => playMusic(fireflies) }>PLAY AUDIO</button>
          <button onClick={ () => playMusic(piano) }>PLAY AUDIO</button>
    <button onClick={ () => playMusic(meditation) }>PLAY AUDIO</button>*/}
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button
            onClick={playMusic}
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
      </div>
    );
  }
        
export default Media;