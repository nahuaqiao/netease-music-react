import { createSlice } from '@reduxjs/toolkit'
import { TracksType } from '../components/PlaylistDetail/TracksCard'

type TracksStateType = {
  tracks: TracksType[]
  currentIndex: number
}

const loadTracks = () => {
  try {
    const tracks = localStorage.getItem('state')
    return tracks === null ? undefined : JSON.parse(tracks).tracks
  } catch (err) {
    return undefined
  }
}

const initialState: TracksStateType = {
  tracks: [],
  currentIndex: -1,
}

/** tracks slice */
const tracksSlice = createSlice({
  name: 'tracks',
  initialState: loadTracks() || initialState,
  reducers: {
    setTracks(state: TracksStateType, action: { payload: TracksStateType }) {
      state.tracks = action.payload.tracks
      state.currentIndex = action.payload.currentIndex
    },
    incrementCurrentIndex(state: TracksStateType) {
      // 当数组长度为2时，当前下标为1表示歌曲播放到了最后一个，因此当currentIndex + 1 等于tracks长度时，让其为0
      state.currentIndex =
        state.currentIndex + 1 >= state.tracks.length
          ? 0
          : state.currentIndex + 1
    },
    decrementCurrentIndex(state: TracksStateType) {
      state.currentIndex =
        state.currentIndex - 1 <= 0
          ? state.tracks.length - 1
          : state.currentIndex - 1
    },
  },
})

export const selectCurrentTrack = (state: {
  tracks: TracksStateType
}): TracksType =>
  state.tracks.tracks.length > 0
    ? state.tracks.tracks[state.tracks.currentIndex]
    : {
        id: 0,
        name: '',
        artists: [],
        album: {
          id: 0,
          name: '',
          coverImgUrl: '',
        },
      }

/** 获取当前播放的歌曲url */
export const selectCurrentTrackUrl = (state: {
  tracks: TracksStateType
}): string =>
  state.tracks.tracks.length > 0
    ? `https:music.163.com/song/media/outer/url?id=${
        state.tracks.tracks[state.tracks.currentIndex].id
      }.mp3`
    : ''

/** 设置当前播放的歌单及歌曲索引 */
export const { setTracks, incrementCurrentIndex, decrementCurrentIndex } =
  tracksSlice.actions

/** tracks store reducer */
export default tracksSlice.reducer
