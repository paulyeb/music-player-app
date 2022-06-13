function musicReducer(state, action) {
  switch(action.type) {
        case "playOrPause":
            return {...state, isPlaying: !state.isPlaying}
        default:
            return state
   }
}

export default musicReducer;