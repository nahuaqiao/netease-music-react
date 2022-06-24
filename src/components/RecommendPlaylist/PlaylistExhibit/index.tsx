import React from 'react'

import {
  Box,
  Button,
  Grid,
  Skeleton,
  Typography,
  useTheme,
  useMediaQuery,
  Grow,
} from '@mui/material'

import RestartAltIcon from '@mui/icons-material/RestartAlt'

import PlaylistCard, {
  PlaylistCardPropType,
  PlaylistCardSkeleton,
} from '../PlaylistCard'

import { EXHIBIT_CARD_COUNT } from '../../../hooks/RecommendPlaylistHooks'

export type PlaylistExhibitPropType = {
  playlistExhibitTitle: string
  playlistExhibitData: PlaylistCardPropType[]
  incrementOffset: () => void
}

// 歌单列表展示
const PlaylistExhibit = ({
  playlistExhibitTitle,
  playlistExhibitData,
  incrementOffset,
}: PlaylistExhibitPropType) => {
  const theme = useTheme()
  const matchMedium = useMediaQuery(theme.breakpoints.up('md'))
  const columnCount = matchMedium ? EXHIBIT_CARD_COUNT : EXHIBIT_CARD_COUNT / 2
  return (
    <Grow in timeout={800}>
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
          <Grid container columns={columnCount} spacing={2}>
            {playlistExhibitData.map((playlistCardProp) => (
              <Grid item xs={1} key={playlistCardProp.id}>
                <PlaylistCard {...playlistCardProp} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Grow>
  )
}

export const PlaylistExhibitSkeleton = () => {
  const theme = useTheme()
  const matchMedium = useMediaQuery(theme.breakpoints.up('md'))
  const columnCount = matchMedium ? EXHIBIT_CARD_COUNT : EXHIBIT_CARD_COUNT / 2
  const forLoop = [...new Array(columnCount).keys()]
  return (
    <Box>
      <Typography sx={{ maxWidth: 80 }} variant='h5' gutterBottom>
        <Skeleton />
      </Typography>
      <Box>
        <Grid container columns={columnCount} spacing={2}>
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
