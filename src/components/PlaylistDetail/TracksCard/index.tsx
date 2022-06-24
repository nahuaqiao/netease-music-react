import React from 'react'

import {
  Card,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  IconButton,
  Grow,
  Box,
  Skeleton,
  List,
} from '@mui/material'
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline'

export type CreatorType = {
  name: string
  avatarUrl: string
}

// 歌曲艺术家
export type ArtistType = {
  id: number
  name: string
}

// 专辑
export type AlbumType = {
  id: number
  name: string
  coverImgUrl: string
}

// 歌曲
export type TracksType = {
  id: number
  name: string
  artists: ArtistType[]
  album: AlbumType
}

// 播放列表单独行
export const TracksRow = ({ track }: { track: TracksType }) => {
  const [raised, setRaised] = React.useState(false)
  return (
    <Card
      sx={{ my: 2 }}
      raised={raised}
      onMouseOver={() => setRaised(true)}
      onMouseLeave={() => setRaised(false)}>
      <ListItem sx={{ cursor: 'pointer' }}>
        <ListItemAvatar>
          <Avatar alt='pic' variant='rounded' src={track.album.coverImgUrl} />
        </ListItemAvatar>
        <ListItemText
          primary={<Typography noWrap>{track.name}</Typography>}
          secondary={
            <Typography noWrap variant='body2' color='text.secondary'>
              {track.artists.map((artist) => artist.name).join(' / ')}
            </Typography>
          }
        />
        <IconButton>
          <PlayCircleOutlineIcon fontSize='medium' />
        </IconButton>
      </ListItem>
    </Card>
  )
}

const TracksCard = ({ tracks }: { tracks: TracksType[] }) => {
  return (
    <Grow in timeout={800}>
      <Box sx={{ p: 2 }}>
        {tracks.map((track) => (
          <TracksRow key={track.id} track={track} />
        ))}
      </Box>
    </Grow>
  )
}

export const TracksRowSkeleton = () => {
  return (
    <Typography variant='h1' sx={{ mt: -4 }}>
      <Skeleton variant='text' />
    </Typography>
  )
}

export const TracksCardSkeleton = () => {
  const forLoop = [...new Array(6).keys()]
  return (
    <Grow in timeout={800}>
      <List sx={{ p: 2 }}>
        {forLoop.map((track) => (
          <TracksRowSkeleton key={track} />
        ))}
      </List>
    </Grow>
  )
}

export default TracksCard
