import { PlaylistCardPropType } from '@/components/PlaylistCard'
import { PlaylistCategory } from '@/hooks/PlaylistHooks'
import Api from './Api'

export const getOfficicalRecommendResponse = async (limit: number) => {
  return await Api(`/personalized?limit=${limit}`)
}

export const getOfficialRecommendData = async (
  limit: number = 7
): Promise<PlaylistCardPropType[]> => {
  const response = await getOfficicalRecommendResponse(limit)
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
  limit: number
) => {
  return await Api(`/top/playlist?cat=${playlistCategory}&limit=${limit}`)
}
export const getTopPlaylistData = async (
  playlistCategory: PlaylistCategory,
  limit: number = 7
): Promise<PlaylistCardPropType[]> => {
  const response = await getTopPlaylistResponse(playlistCategory, limit)
  console.log(response)
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
