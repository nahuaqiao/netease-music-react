import React from 'react'

import { Box, Stack } from '@mui/material'

import {
  useTopPlaylist,
  useOfficicalRecommend,
} from '../../hooks/RecommendPlaylistHooks'
import { useNavigate } from 'react-router-dom'
import PlaylistExhibit, {
  PlaylistExhibitPropType,
  PlaylistExhibitSkeleton,
} from '../../components/RecommendPlaylist/PlaylistExhibit'

const PlaylistRow = ({
  playlistExhibitTitle,
  playlistExhibitData,
  incrementOffset,
}: PlaylistExhibitPropType) => {
  return (
    <Box>
      {playlistExhibitData.length > 0 ? (
        <PlaylistExhibit
          playlistExhibitTitle={playlistExhibitTitle}
          playlistExhibitData={playlistExhibitData}
          incrementOffset={incrementOffset}
        />
      ) : (
        <PlaylistExhibitSkeleton />
      )}
    </Box>
  )
}

export const PlaylistCardContext = React.createContext<{
  handleClickPlaylistCard: (paylistId: number) => void
}>({ handleClickPlaylistCard: (paylistId: number) => {} })

// 获取要展示的推荐歌单数据, 渲染到页面中
const Recommend = () => {
  const navigate = useNavigate()

  const handleClickPlaylistCard = (playlistId: number) => {
    navigate(`/playlist/${playlistId}`)
  }

  const initialContext = {
    handleClickPlaylistCard,
  }

  // 获取古典音乐推荐歌单数据
  const [classicalPlaylistExhibitData, incrementOffsetClassical] =
    useTopPlaylist('古典')

  const classicalPlaylistProp = {
    playlistExhibitTitle: '古典',
    playlistExhibitData: classicalPlaylistExhibitData,
  }

  // 获取电子音乐推荐歌单数据
  const [electronicPlaylistExhibitData, incrementOffsetElectronic] =
    useTopPlaylist('电子')
  const electronicPlaylistProp = {
    playlistExhibitTitle: '电子',
    playlistExhibitData: electronicPlaylistExhibitData,
  }

  // 获取蓝调音乐推荐歌单数据
  const [bluesPlaylistExhibitData, incrementOffsetBlues] =
    useTopPlaylist('蓝调')

  const bluesPlaylistProp = {
    playlistExhibitTitle: '蓝调',
    playlistExhibitData: bluesPlaylistExhibitData,
  }

  // 获取蓝调音乐推荐歌单数据
  const [acgPlaylistExhibitData, incrementOffsetAcg] = useTopPlaylist('ACG')

  const acgPlaylistProp = {
    playlistExhibitTitle: 'ACG',
    playlistExhibitData: acgPlaylistExhibitData,
  }

  // 获取官方推荐歌单列表数据
  const [officialPlaylistExhibitData, incrementOffsetOfficial] =
    useOfficicalRecommend()
  const officialPlaylistProp = {
    playlistExhibitTitle: '官方推荐',
    playlistExhibitData: officialPlaylistExhibitData,
  }

  return (
    <PlaylistCardContext.Provider value={initialContext}>
      <Stack spacing={4}>
        <PlaylistRow
          incrementOffset={incrementOffsetClassical}
          {...classicalPlaylistProp}
        />
        <PlaylistRow
          incrementOffset={incrementOffsetElectronic}
          {...electronicPlaylistProp}
        />
        <PlaylistRow
          incrementOffset={incrementOffsetBlues}
          {...bluesPlaylistProp}
        />
        <PlaylistRow
          incrementOffset={incrementOffsetAcg}
          {...acgPlaylistProp}
        />
        <PlaylistRow
          incrementOffset={incrementOffsetOfficial}
          {...officialPlaylistProp}
        />
      </Stack>
    </PlaylistCardContext.Provider>
  )
}

export default Recommend
