import { configureStore } from '@reduxjs/toolkit'
import Projects from './slices/Projects'
export default configureStore({
  reducer: {
    projects: Projects.reducer
  },    
})