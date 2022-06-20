import React from 'react'

import { Box, Button, Grid, Skeleton, Typography } from '@mui/material'

import RestartAltIcon from '@mui/icons-material/RestartAlt'
import PlaylistCard, {
  PlaylistCardPropType,
  PlaylistCardSkeleton,
} from '../PlaylistCard'

export type PlaylistExhibitPropType = {
  playlistExhibitTitle: string
  playlistExhibitData: PlaylistCardPropType[]
  incrementOffset: () => void
}

export const EXHIBIT_CARD_COUNT = 6

// 歌单列表展示
const PlaylistExhibit = ({
  playlistExhibitTitle,
  playlistExhibitData,
  incrementOffset,
}: PlaylistExhibitPropType) => {
  return (
    <Box>
      <Box display='flex'>
        <Typography variant='h5' sx={{ flexGrow: 1 }} gutterBottom>
          {playlistExhibitTitle}
        </Typography>
        <Button
          variant='text'
          size='large'
          color='inherit'
          endIcon={<RestartAltIcon />}
          onClick={() => incrementOffset()}>
          换一批
        </Button>
      </Box>
      <Box>
        <Grid container columns={EXHIBIT_CARD_COUNT} spacing={2}>
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
  const forLoop = [...new Array(EXHIBIT_CARD_COUNT).keys()]

  return (
    <Box>
      <Typography sx={{ maxWidth: 80 }} variant='h5' gutterBottom>
        <Skeleton />
      </Typography>
      <Box>
        <Grid container columns={EXHIBIT_CARD_COUNT} spacing={2}>
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
