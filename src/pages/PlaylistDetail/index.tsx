import React from 'react'

import { useParams } from 'react-router-dom'

import { Grid, Grow } from '@mui/material'

import { usePlaylistDetail } from '../../hooks/PlaylistDetailHooks'
import PlaylistInfoCard, {
  PlaylistInfoType,
  PlaylistInfoCardSkeleton,
} from '../../components/PlaylistDetail/PlaylistInfoCard'
import TracksCard, {
  TracksType,
  TracksCardSkeleton,
} from '../../components/PlaylistDetail/TracksCard'

//#region 类型定义
// 组件需要的props
export type PlaylistDetailPropType = {
  playlistInfo: PlaylistInfoType
  tracks: TracksType[]
}
//#endregion

const PlaylistDetail = () => {
  // 判断页面是否为宽屏
  const { playlistId } = useParams()

  const { playlistInfo, tracks } = usePlaylistDetail(Number(playlistId))

  return (
    <Grow in timeout={800}>
      <Grid container>
        <Grid item xs={12} md={3}>
          {tracks.length > 0 ? (
            <PlaylistInfoCard playlistInfo={playlistInfo} />
          ) : (
            <PlaylistInfoCardSkeleton />
          )}
        </Grid>
        <Grid item xs={12} md={9}>
          {tracks.length > 0 ? (
            <TracksCard tracks={tracks} />
          ) : (
            <TracksCardSkeleton />
          )}
        </Grid>
      </Grid>
    </Grow>
  )
}

export default PlaylistDetail
