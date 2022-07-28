import React from 'react'

import { checkTrackValidData } from '../api/TrackApi'

export const useTrackIsValid = (trackId: number): boolean => {
  const [trackIsValid, setTrackIsValid] = React.useState(false)

  const loadState = React.useCallback(async () => {
    const isValidData = await checkTrackValidData(trackId)
    setTrackIsValid(isValidData)
  }, [trackId])

  React.useEffect(() => {
    loadState()
  }, [loadState])

  return trackIsValid
}
