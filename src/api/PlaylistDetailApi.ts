import { PlaylistDetailPropType } from '../pages/PlaylistDetail'
import Api from './Api'

export type ResponseCreatorType = {
  nickname: string
  avatarUrl: string
}

export type ResponseTracksType = {
  id: number
  name: string
  ar: { name: string; id: number }[]
  al: {
    id: number
    name: string
    picUrl: string
  }
}

export type ResponsePlaylistInfoType = {
  name: string
  coverImgUrl: string
  creator: ResponseCreatorType
  trackCount: number
  playCount: number
  description: string
  tracks: ResponseTracksType[]
}

/**
 * 返回原始响应
 * @param playlistId 歌单id
 * @returns 响应内容
 */
export const getPlaylistDetailResponse = async (
  playlistId: number
): Promise<{
  data: {
    playlist: ResponsePlaylistInfoType
  }
}> => {
  return await Api(`/playlist/detail?id=${playlistId}`)
}

/**
 * 将原始响应内容改造为组件可用的歌单信息对象
 * @param playlistId 歌单id
 * @returns 改造后的歌单信息对象
 */
export const getPlaylistDetailData = async (
  playlistId: number
): Promise<PlaylistDetailPropType> => {
  const { data } = await getPlaylistDetailResponse(playlistId)
  console.log(data)
  return {
    playlistInfo: {
      name: data.playlist.name,
      coverImgUrl: data.playlist.coverImgUrl,
      trackCount: data.playlist.trackCount,
      playCount: data.playlist.playCount,
      description: data.playlist.description,
      creator: {
        name: data.playlist.creator.nickname,
        avatarUrl: data.playlist.creator.avatarUrl,
      },
    },

    tracks: data.playlist.tracks.map((track) => ({
      id: track.id,
      name: track.name,
      artists: track.ar.map(({ id, name }) => ({ id, name })),
      album: {
        id: track.al.id,
        name: track.al.name,
        coverImgUrl: track.al.picUrl,
      },
    })),
  }
}
