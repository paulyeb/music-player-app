import React, {useRef, useContext} from 'react';
import { MusicContext } from '../store/music-context';


const  Player = () => {
  const {state, dispatch} = useContext(MusicContext);
  const audioElement = useRef(null);

  const playOrPauseHandler = async () => { 
      await dispatch({
        type: "playOrPause"
      });

      if (state.isPlaying) {
        audioElement.current.pause();
      } else {
        audioElement.current.play();
      };
  }

  return (
    <div>
        <div>Music Player</div>

        <audio src={state.songs[2].src} ref={audioElement}></audio>

        <button 
          className='bg-gray-800 text-gray-200 p-2 rounded'
          onClick={playOrPauseHandler}
        >
          {state.isPlaying ? 'Pause' : 'Play'}
        </button>
    </div>
  )
}

export default Player;