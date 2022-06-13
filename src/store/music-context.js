import {createContext, useReducer} from "react";
import musicReducer from "../reducers/musicReducer";

export const MusicContext = createContext();

const initialState = {
    songs: 
    [
        {
            title: "Until Shiloh Comes",
            artist: "Chris Delvan Gwamna",
            img_src: "./images/chris-delvan-2.jpg",
            src: "./music/chris_delvan_until_shiloh_comes.mp3"
        },
        {
            title: "Spirit Chants",
            artist: "Chris Delvan Gwamna",
            img_src: "./images/Chris-Delvan.jpg",
            src: "./music/chris_delvan_gwamna_spirit_chant.mp3"
        },
        {
            title: "Ancient Words",
            artist: "Michael W. Smith",
            img_src: "./images/Michael-W-Smith.jpg",
            src: "./music/ancient-words.mp3"
        },
        {
            title: "I've Got My Mind Made Up",
            artist: "Donnie McClurkin",
            img_src: "./images/Donnie-McClurkin.jpg",
            src: "./music/i've_got_my_mind.mp3"
        }
    ],
    isPlaying: false,
    currentSongIndex: 0
};

const MusicProvider = ({children}) => {
    const [state, dispatch] = useReducer(musicReducer, initialState);

    return <MusicContext.Provider value={{state, dispatch}}>
        {children}
    </MusicContext.Provider>
}

export default MusicProvider;
