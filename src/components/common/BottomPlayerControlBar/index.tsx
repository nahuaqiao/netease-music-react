import * as React from 'react'

import './style.scss'

import { alpha } from '@mui/material/styles'
import { AppBar, Toolbar, ListItemAvatar, Avatar } from '@mui/material'

import { useDispatch, useSelector } from 'react-redux'

import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

import {
  decrementCurrentIndex,
  incrementCurrentIndex,
  selectCurrentTrackUrl,
  selectCurrentTrack,
} from '../../../redux/TracksSlice'

/**
 * 从 store 中获取播放器配置、playlist 及当前播放的歌曲
 * @returns
 */
export default function BottomAppBar() {
  const track = useSelector(selectCurrentTrack)
  const trackUrl = useSelector(selectCurrentTrackUrl)

  return (
    <AppBar
      position='fixed'
      sx={{
        top: 'auto',
        bottom: 0,
        backgroundColor: alpha('#fff', 0.7),
        backdropFilter: 'saturate(180%) blur(25px)',
      }}
      elevation={0}>
      <Toolbar>
        <ListItemAvatar>
          <Avatar alt='pic' variant='rounded' src={track.album.coverImgUrl} />
        </ListItemAvatar>
        <MusicPlayer trackUrl={trackUrl} />
      </Toolbar>
    </AppBar>
  )
}

/**
 * 从 store 中获取播放器配置、playlist 及当前播放的歌曲
 * @returns
 */
function MusicPlayer({ trackUrl }: { trackUrl: string }) {
  const dispatch = useDispatch()

  return (
    <AudioPlayer
      showSkipControls={true}
      showJumpControls={false}
      defaultCurrentTime={'00:00'}
      defaultDuration={'00:00'}
      onPlayError={(e) => {
        console.log(e)
      }}
      onClickNext={() => {
        dispatch(incrementCurrentIndex())
      }}
      onClickPrevious={() => {
        dispatch(decrementCurrentIndex())
      }}
      src={trackUrl}
      onPlay={(e) => {
        // console.log('onPlay')
      }}
    />
  )
}
