import React, {createContext, useReducer} from "react";
import musicReducer from "../reducers/musicReducer";

export const MusicContext = createContext();

const initialState = {
    songs: 
    [
        {
            title: "Until Shiloh Comes",
            artist: "Chris Delvan",
            img_src: "./images/song-1.jpg",
            src: "./music/chris_delvan_until_shiloh_comes.mp3"
        },
        {
            title: "Until Shiloh Comes",
            artist: "Spirit Chants",
            img_src: "./images/song-2.jpg",
            src: "./music/chris_delvan_gwamna_spirit_chant.mp3"
        },
        {
            title: "Ancient Words",
            artist: "Artist 3",
            img_src: "./images/song-3.jpg",
            src: "./music/ancient-words.mp3"
        },
        {
            title: "I've Got My Mind Made Up",
            artist: "Donnie McClurkin",
            img_src: "./images/song-4.jpg",
            src: "./music/i've_got_my_mind.mp3"
        }
    ],
    isPlaying: false
};

const MusicProvider = ({children}) => {
    const [state, dispatch] = useReducer(musicReducer, initialState);

    return <MusicContext.Provider value={{state, dispatch}}>
        {children}
    </MusicContext.Provider>
}

export default MusicProvider;
