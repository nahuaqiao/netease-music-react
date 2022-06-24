import React from 'react'

import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Skeleton,
  Tooltip,
  Grow,
} from '@mui/material'

import styled from '@emotion/styled'

import { PlaylistCardContext } from '../../../pages/RecommendPlaylist'

/**
 * 歌单id, 歌单名, 封面图片路径, 播放次数,歌曲数量
 */
export type PlaylistCardPropType = {
  id: number
  name: string
  coverImgUrl: string
  playCount: number
  trackCount: number
}

export const TypographyLink = styled(Typography)(() => ({
  '&:hover': {
    textDecoration: 'underline',
  },
}))

export const PlaylistCard = ({
  id,
  name,
  coverImgUrl,
  playCount,
  trackCount,
}: PlaylistCardPropType) => {
  const [raised, setRaised] = React.useState(false)
  const { handleClickPlaylistCard } = React.useContext(PlaylistCardContext)

  return (
    <Card
      sx={{ maxWidth: 185 }}
      raised={raised}
      onMouseEnter={() => setRaised(true)}
      onMouseOut={() => setRaised(false)}>
      <CardActionArea onClick={() => handleClickPlaylistCard(id)}>
        <CardMedia
          component='img'
          image={coverImgUrl}
          alt={name}
          loading='lazy'></CardMedia>
      </CardActionArea>

      <CardContent
        className='SingleLineTextOverflowEllipsis'
        sx={{
          textAlign: 'center',
        }}>
        <Tooltip title={name}>
          <TypographyLink
            color='inherit'
            variant='overline'
            sx={{ cursor: 'pointer' }}
            onClick={() => handleClickPlaylistCard(id)}>
            {name}
          </TypographyLink>
        </Tooltip>
      </CardContent>
    </Card>
  )
}

export const PlaylistCardSkeleton = () => {
  return (
    <Grow in timeout={800}>
      <Card sx={{ maxWidth: 185 }}>
        <CardActionArea>
          <Skeleton variant='rectangular' width='100%'>
            <div style={{ paddingTop: '100%' }} />
          </Skeleton>
        </CardActionArea>
        <CardContent>
          <TypographyLink color='inherit' variant='inherit'>
            <Skeleton />
          </TypographyLink>
        </CardContent>
      </Card>
    </Grow>
  )
}

export default PlaylistCard
