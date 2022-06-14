function musicReducer(state, action) {
  switch(action.type) {
        case "playOrPause":
            return {...state, isPlaying: !state.isPlaying}
        case "previous":
            if (state.currentSongIndex - 1 < 0) {
                return {...state, isPlaying: false, currentSongIndex: state.currentSongIndex = state.songs.length}
            }
            return{...state, isPlaying: false, currentSongIndex: state.currentSongIndex - 1}
        case "next":
            if (state.currentSongIndex + 1 >= state.songs.length) {
                return {...state, isPlaying: false, currentSongIndex: state.currentSongIndex - 3}
            }
            return{...state, isPlaying: false, currentSongIndex: state.currentSongIndex + 1}
        case "shuffle":
            function getRandom(min = 0, max = state.songs.length) {
                let difference = max - min;
                let rand = Math.random();
                rand = Math.floor(rand * difference);
                rand = rand + min;
                console.log(rand);
                return rand;
            }
            return {...state, isPlaying: false, currentSongIndex: getRandom() }
        default:
            return state
   }
}

export default musicReducer;