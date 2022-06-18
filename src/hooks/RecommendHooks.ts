import React from 'react'

import { PlaylistCardPropType } from '@/components/PlaylistCard'
import {
  getOfficialRecommendData,
  getTopPlaylistData,
} from '@/api/RecommendApi'

// 获取官方推荐数据钩子
export const useOfficicalRecommend = () => {
  const [officialRecommend, setOfficialRecommend] = React.useState<
    PlaylistCardPropType[]
  >([])

  // useCallback的意义是为了不重复创建函数, 即使父组件重新渲染,被useCallback包裹的函数也不会重新生成
  const loadState = React.useCallback(async () => {
    const officialRecommendData = await getOfficialRecommendData()
    setOfficialRecommend(officialRecommendData)
  }, [])

  React.useEffect(() => {
    loadState()
  }, [loadState])

  return officialRecommend
}

// 获取对应类别歌单数据
// 歌单类别可以从服务器获取, 这样写是出于精简页面的目的, 只展示特定类别
export type PlaylistCategory = '电子' | '古典' | '蓝调' | 'ACG'

// 获取对应类别的热门歌单
export const useTopPlaylist = (playlistCategory: PlaylistCategory) => {
  const [topPlaylist, setTopPlaylist] = React.useState<PlaylistCardPropType[]>(
    []
  )
  // useCallback的意义是为了不重复创建函数, 即使父组件重新渲染,被useCallback包裹的函数也不会重新生成
  const loadState = React.useCallback(async () => {
    const topPlaylistData = await getTopPlaylistData(playlistCategory)
    setTopPlaylist(topPlaylistData)
  }, [playlistCategory])

  React.useEffect(() => {
    loadState()
  }, [loadState])

  return topPlaylist
}
