import './App.css';
import { useState } from "react";
import Player from './components/Player';

function App() {
    const [songs] = useState([
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
          src: "./music/chris_delvan_spirit_chants.mp3"
        },
        {
          title: "Ancient Words",
          artist: "Artist 3",
          img_src: "./images/song-3.jpg",
          src: "./music/ancient_words.mp3"
        },
        {
          title: "I've Got My Mind Made Up",
          artist: "Donnie McClurkin",
          img_src: "./images/song-4.jpg",
          src: "./music/i've_got_my_mind.mp3"
        }
    ]);


  return (
    <div className="App">
          <Player songs={songs} />
    </div>
  );
}

export default App;
