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
        default:
            return state
   }
}

export default musicReducer;