import React from 'react'

import {
  getOfficialRecommendData,
  getTopPlaylistData,
} from '../api/RecommendPlaylistApi'

export const EXHIBIT_CARD_COUNT = 6

export type RecommendPlaylistType = {
  id: number
  name: string
  coverImgUrl: string
  playCount: number
  trackCount: number
}

/**
 * 获取官方推荐数据钩子
 * @param rowCount 推荐歌单行数, 默认为一行, 一行默认为6个, 储存在一个常量EXHIBIT_CARD_COUNT中, 变量存在于@/components/PlaylistExhibit文件中
 * @returns 推荐歌单数据, 以歌单类别和歌单内容组成, 内容长度为rowCount * EXHIBIT_CARD_COUNT
 */
export const useOfficicalRecommend = (
  rowCount: number = 1
): [RecommendPlaylistType[], () => void] => {
  const [officialRecommend, setOfficialRecommend] = React.useState<
    RecommendPlaylistType[]
  >([])

  const [offset, setOffset] = React.useState(0)

  const incrementOffset = () => setOffset((preOffset) => preOffset + 1)

  // useCallback的意义是为了不重复创建函数, 即使父组件重新渲染,被useCallback包裹的函数也不会重新生成
  const loadState = React.useCallback(async () => {
    const officialRecommendData = await getOfficialRecommendData(
      rowCount * EXHIBIT_CARD_COUNT,
      offset
    )
    setOfficialRecommend(officialRecommendData)
  }, [offset, rowCount])

  React.useEffect(() => {
    loadState()
  }, [rowCount, loadState])

  return [officialRecommend, incrementOffset]
}

// 获取对应类别歌单数据
// 歌单类别可以从服务器获取, 这样写是出于精简页面的目的, 只展示特定类别
export type PlaylistCategory = '电子' | '古典' | '蓝调' | 'ACG'

// 获取对应类别的热门歌单
/**
 * @param playlistCategory 歌单类别
 * @param rowCount 推荐歌单行数, 默认为一行, 一行默认为6个, 储存在一个常量EXHIBIT_CARD_COUNT中, 变量存在于@/components/PlaylistExhibit文件中
 * @returns 推荐歌单数据, 以歌单类别和歌单内容组成, 内容长度为rowCount * EXHIBIT_CARD_COUNT
 */
export const useTopPlaylist = (
  playlistCategory: PlaylistCategory,
  rowCount: number = 1
): [RecommendPlaylistType[], () => void] => {
  const [topPlaylist, setTopPlaylist] = React.useState<RecommendPlaylistType[]>(
    []
  )
  const [offset, setOffset] = React.useState(0)

  const incrementOffset = () => setOffset((preOffset) => preOffset + 1)

  // useCallback的意义是为了不重复创建函数, 即使父组件重新渲染,被useCallback包裹的函数也不会重新生成. 仅当观测的参数发生变化才重新计算函数结果
  const loadState = React.useCallback(async () => {
    const topPlaylistData = await getTopPlaylistData(
      playlistCategory,
      rowCount * EXHIBIT_CARD_COUNT,
      offset
    )
    setTopPlaylist(topPlaylistData)
  }, [playlistCategory, rowCount, offset])

  React.useEffect(() => {
    loadState()
  }, [loadState])

  return [topPlaylist, incrementOffset]
}
