import React from 'react'

import { getPlaylistDetailData } from '../api/PlaylistDetailApi'

import { PlaylistDetailPropType } from '../pages/PlaylistDetail'

export const usePlaylistDetail = (
  playlistId: number
): PlaylistDetailPropType => {
  // 初始状态
  const initialState: PlaylistDetailPropType = {
    playlistInfo: {
      name: '复古 动漫 蒸汽波',
      coverImgUrl:
        'http://p1.music.126.net/RWNpJtJhVpTdzD1VV2gHtg==/109951167220574969.jpg',
      trackCount: 999,
      playCount: 999,
      description: '蒸汽波',
      creator: {
        name: '佚名',
        avatarUrl:
          'http://p1.music.126.net/RWNpJtJhVpTdzD1VV2gHtg==/109951167220574969.jpg',
      },
    },
    tracks: [],
  }

  const [playlistDetail, setPlaylistDetail] =
    React.useState<PlaylistDetailPropType>(initialState)

  const loadState = React.useCallback(async () => {
    const playlistDetailData = await getPlaylistDetailData(playlistId)
    setPlaylistDetail(playlistDetailData)
  }, [playlistId])

  React.useEffect(() => {
    loadState()
  }, [loadState])

  return playlistDetail
}
