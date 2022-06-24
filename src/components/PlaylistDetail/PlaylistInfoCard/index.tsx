import React from 'react'

import {
  Grow,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActionArea,
  Skeleton,
} from '@mui/material'

import { CreatorType } from '../TracksCard'

// 歌单信息
export type PlaylistInfoType = {
  name: string
  coverImgUrl: string
  trackCount: number
  playCount: number
  description: string
  creator: CreatorType
}

const PlaylistInfoCard = ({
  playlistInfo,
}: {
  playlistInfo: PlaylistInfoType
}) => {
  return (
    <Grow in timeout={800}>
      <Card variant='outlined' sx={{ border: 'none', px: 2, pt: 4 }}>
        <CardMedia
          component='img'
          image={playlistInfo.coverImgUrl}
          alt={playlistInfo.name}
          loading='lazy'
          sx={{ borderRadius: 2 }}
        />
        <CardContent>
          <Typography gutterBottom variant='h6' component='div'>
            {playlistInfo.name}
          </Typography>
          <Typography variant='caption' color='text.secondary'>
            {playlistInfo.description}
          </Typography>
        </CardContent>
      </Card>
    </Grow>
  )
}

export const PlaylistInfoCardSkeleton = () => {
  return (
    <Grow in timeout={800}>
      <Card variant='outlined' sx={{ border: 'none', p: 2 }}>
        <CardActionArea>
          <Skeleton variant='rectangular' width='100%'>
            <div style={{ paddingTop: '100%' }} />
          </Skeleton>
        </CardActionArea>
        <CardContent>
          <Typography variant='h2'>
            <Skeleton />
          </Typography>
          <Typography variant='h6'>
            <Skeleton />
          </Typography>
        </CardContent>
      </Card>
    </Grow>
  )
}

export default PlaylistInfoCard
