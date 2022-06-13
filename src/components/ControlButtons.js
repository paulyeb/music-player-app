import { useContext, useRef } from "react";
import { MusicContext } from "../store/music-context";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward, faBackward, faPause, faPlay } from "@fortawesome/free-solid-svg-icons";

const ControlButtons = () => {
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
    <div className="flex justify-center items-center" >
        <audio src={state.songs[state.currentSongIndex].src} ref={audioElement}></audio>
        <button
          className="active:bg-gray-200 border border-gray-200 bg-white shadow-lg rounded-full"
          onClick={() => dispatch({
              type: "previous"
            })
          }  
        >
            <FontAwesomeIcon 
                icon={faBackward} 
                style={{color: 'green', height: '30px', width: '30px'}} 
                className="p-3"
            />
        </button>

        <button
          className="active:bg-gray-200 mx-10 border bg-white rounded-full shadow-xl"
          onClick={playOrPauseHandler}
          >
            <FontAwesomeIcon 
                className="px-3 py-3" 
                icon={state.isPlaying ? faPause : faPlay} style={{color: 'green', height: '50px', width: '50px'}} 
            />
        </button>
        
        <button 
        className="active:bg-gray-200 border border-gray-200 bg-white shadow-lg rounded-full"
          onClick={() => dispatch({
              type: "next"
            })
          }
        >
            <FontAwesomeIcon 
                icon={faForward} 
                style={{color: 'green', height: '30px', width: '30px'}} 
                className="px-3 py-3"
            />
        </button>
    </div>
  )
}

export default ControlButtons;