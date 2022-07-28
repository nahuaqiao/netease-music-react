///#region 备份
import { configureStore } from '@reduxjs/toolkit'

import tracksReducer from './TracksSlice'

export default configureStore({
  reducer: {
    tracks: tracksReducer,
  },
})

///#endregion
