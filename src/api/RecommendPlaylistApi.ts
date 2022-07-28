import { PlaylistCardPropType } from '../components/RecommendPlaylist/PlaylistCard'
import {
  EXHIBIT_CARD_COUNT,
  PlaylistCategory,
} from '../hooks/RecommendPlaylistHooks'
import Api from './Api'

export type OfficialRecommendResponseType = {
  id: number
  name: string
  picUrl: string
  playCount: number
  trackCount: number
}

export const getOfficicalRecommendResponse = async (
  limit: number,
  offset: number
): Promise<{ data: { result: OfficialRecommendResponseType[] } }> => {
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
    }: OfficialRecommendResponseType) => ({
      id,
      name,
      coverImgUrl: picUrl,
      playCount,
      trackCount,
    })
  )
}

export type TopPlaylistResponseType = {
  id: number
  name: string
  coverImgUrl: string
  playCount: number
  trackCount: number
}

export const getTopPlaylistResponse = async (
  playlistCategory: PlaylistCategory,
  limit: number,
  offset: number
): Promise<{ data: { playlists: TopPlaylistResponseType[] } }> => {
  return await Api(
    `/top/playlist?cat=${playlistCategory}&limit=${limit}&offset=${offset}`
  )
}

export const getTopPlaylistData = async (
  playlistCategory: PlaylistCategory,
  limit: number,
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
    }: TopPlaylistResponseType) => ({
      id,
      name,
      coverImgUrl,
      playCount,
      trackCount,
    })
  )
}
