import { configureStore } from '@reduxjs/toolkit'
import createToken from './slices/CreateToken'
import playList from './slices/Playlist'
import Projects from './slices/Projects'
export default configureStore({
  reducer: {
    projects: Projects.reducer,
    token: createToken.reducer,
    playlist: playList.reducer
  },    
})