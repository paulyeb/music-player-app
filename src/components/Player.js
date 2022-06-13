import React, {useRef, useEffect, useState} from 'react';


function Player({songs}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioElelment = useRef(null);

  useEffect(() => {
    if(isPlaying) {
      audioElelment.current.play();
    } else {
      audioElelment.current.pause();
    };
  }, [isPlaying]);

  const playMusicHandler = () => { 
    setIsPlaying(prevState => !prevState);
  }

  return (
    <div>
      <div>Music Player</div>
      <audio src={songs[0].src} ref={audioElelment}></audio>
      <button 
        className='bg-gray-800 text-gray-200 p-2 rounded'
        onClick={playMusicHandler}  
      >
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </button>
    </div>
  )
}

export default Player;