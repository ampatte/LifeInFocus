import React from "react";
import fireflies from './music/fireflies.mp3';

function Media() {

  const audio = new Audio(fireflies);
  const playMusic = () => {
    audio.play()
  };

    return (
      <div className="Media">
        <div>
          <button onClick={ () => playMusic() }>PLAY AUDIO</button>
        </div>
      </div>
    );
  }
        
export default Media;