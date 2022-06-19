import Api from './Api'

import { PlaylistCardPropType } from '@/components/PlaylistCard'
import { EXHIBIT_CARD_COUNT } from '@/components/PlaylistExhibit'
import { PlaylistCategory } from '@/hooks/PlaylistHooks'

export const getOfficicalRecommendResponse = async (
  limit: number,
  offset: number
) => {
  return await Api(`/personalized?limit=${limit}&offset=${offset}`)
}

export const getOfficialRecommendData = async (
  limit: number = EXHIBIT_CARD_COUNT,
  offset: number
): Promise<PlaylistCardPropType[]> => {
  const response = await getOfficicalRecommendResponse(limit, offset)
  return response.data.result.map(
    ({
      id,
      name,
      picUrl,
      playCount,
      trackCount,
    }: {
      id: number
      name: string
      picUrl: string
      playCount: number
      trackCount: number
    }) => ({
      id,
      name,
      coverImgUrl: picUrl,
      playCount,
      trackCount,
    })
  )
}

export const getTopPlaylistResponse = async (
  playlistCategory: PlaylistCategory,
  limit: number,
  offset: number
) => {
  return await Api(
    `/top/playlist?cat=${playlistCategory}&limit=${limit}&offset=${offset}`
  )
}
export const getTopPlaylistData = async (
  playlistCategory: PlaylistCategory,
  limit: number = EXHIBIT_CARD_COUNT,
  offset: number
): Promise<PlaylistCardPropType[]> => {
  const response = await getTopPlaylistResponse(playlistCategory, limit, offset)
  return response.data.playlists.map(
    ({
      id,
      name,
      coverImgUrl,
      playCount,
      trackCount,
    }: {
      id: number
      name: string
      coverImgUrl: string
      playCount: number
      trackCount: number
    }) => ({
      id,
      name,
      coverImgUrl,
      playCount,
      trackCount,
    })
  )
}
