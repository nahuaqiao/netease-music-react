import React from 'react'

import { Box, Stack } from '@mui/material'

import PlaylistExhibit, {
  PlaylistExhibitPropType,
  PlaylistExhibitSkeleton,
} from '@/components/PlaylistExhibit'

import { useOfficicalRecommend, useTopPlaylist } from '@/hooks/RecommendHooks'

const RecommendRow = ({
  playlistExhibitTitle,
  playlistExhibitData,
}: PlaylistExhibitPropType) => {
  return (
    <Box>
      {playlistExhibitData.length === 0 ? (
        <PlaylistExhibitSkeleton />
      ) : (
        <PlaylistExhibit
          playlistExhibitTitle={playlistExhibitTitle}
          playlistExhibitData={playlistExhibitData}
        />
      )}
    </Box>
  )
}

// 获取要展示的推荐歌单数据, 渲染到页面中
const Recommend = () => {
  // 获取官方推荐歌单列表
  const officialPlaylistProp = {
    playlistExhibitTitle: '官方推荐',
    playlistExhibitData: useOfficicalRecommend(),
  }

  const electronicPlaylistProp = {
    playlistExhibitTitle: '电子音乐',
    playlistExhibitData: useTopPlaylist('电子'),
  }

  return (
    <Stack spacing={4}>
      <RecommendRow {...officialPlaylistProp} />
      <RecommendRow {...electronicPlaylistProp} />
    </Stack>
  )
}

export default Recommend
