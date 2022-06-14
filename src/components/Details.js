import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShuffle } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { MusicContext } from "../store/music-context";

const Details = () => {
    const {state, dispatch} = useContext(MusicContext);
    return (
        <div>
            <div>
            <img 
                src={state.songs[state.currentSongIndex].img_src} 
                alt={state.songs[state.currentSongIndex].artist} 
                className="shadow-xl h-80 w-80 rounded-full object-cover" 
            />
            </div>
            <div className="flex justify-between items-center">
                <div className="flex flex-col justify-start items-start mt-5 mb-5">
                    <h1 className="text-2xl font-bold text-gray-700">{state.songs[state.currentSongIndex].artist}</h1>
                    <p className="text-lg font-medium text-gray-600">{state.songs[state.currentSongIndex].title}</p>
                </div>
                <button onClick={() => dispatch({type: "shuffle"})} className="rounded-full border p-1 active:bg-gray-200 shadow-xl bg-gray-50">
                    <FontAwesomeIcon icon={faShuffle} style={{height: '16px', width: '16px', color: 'black'}} />
                </button>
            </div>
        </div>
    )
}

export default Details;