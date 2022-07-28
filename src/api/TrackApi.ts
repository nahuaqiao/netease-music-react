import Api from './Api'

export const checkTrackValidResponse = async (trackId: number) => {
  return await Api(`/check/music?id=${trackId}`)
}

export const checkTrackValidData = async (trackId: number) => {
  const res = await checkTrackValidResponse(trackId)
  return res.data.success
}
