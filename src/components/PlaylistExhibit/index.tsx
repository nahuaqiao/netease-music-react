import React from 'react'

import PlaylistCard, {
  PlaylistCardPropType,
  PlaylistCardSkeleton,
} from '@/components/PlaylistCard'
import { Box, Grid, Skeleton, Typography } from '@mui/material'

export type PlaylistExhibitPropType = {
  playlistExhibitTitle: string
  playlistExhibitData: PlaylistCardPropType[]
}

// 歌单列表展示
const PlaylistExhibit = ({
  playlistExhibitTitle,
  playlistExhibitData,
}: PlaylistExhibitPropType) => {
  return (
    <Box>
      <Typography variant='h5' gutterBottom>
        {playlistExhibitTitle}
      </Typography>
      <Box>
        <Grid container columns={7} spacing={2}>
          {playlistExhibitData.map((playlistCardProp) => (
            <Grid item xs={1} key={playlistCardProp.id}>
              <PlaylistCard {...playlistCardProp} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export const PlaylistExhibitSkeleton = () => {
  const forLoop = [...new Array(7).keys()]

  return (
    <Box>
      <Typography sx={{ maxWidth: 80 }} variant='h5' gutterBottom>
        <Skeleton />
      </Typography>
      <Box>
        <Grid container columns={7} spacing={2}>
          {forLoop.map((key) => (
            <Grid item xs={1} key={key}>
              <PlaylistCardSkeleton />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  )
}

export default PlaylistExhibit
