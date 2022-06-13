import './App.css';
import Player from './components/Player';
import MusicProvider from './store/music-context';

const App = () => {
  
    return (
      <MusicProvider>
          <div className="App">
            <Player />
          </div>
      </MusicProvider>
    );
}

export default App;
