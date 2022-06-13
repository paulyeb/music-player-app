import { useContext } from "react";
import { MusicContext } from "../store/music-context";

const Details = () => {
    const {state} = useContext(MusicContext);
    return (
        <div>
            <div>
            <img 
                src={state.songs[state.currentSongIndex].img_src} 
                alt={state.songs[state.currentSongIndex].artist} 
                className="shadow-xl h-80 w-80 rounded-full object-cover" 
            />
            </div>
            <div className="flex flex-col justify-start items-start mt-5 mb-5">
                <h1 className="text-2xl font-bold my-1">{state.songs[state.currentSongIndex].artist}</h1>
                <p className="text-xl font-medium">{state.songs[state.currentSongIndex].title}</p>
            </div>
        </div>
    )
}

export default Details;