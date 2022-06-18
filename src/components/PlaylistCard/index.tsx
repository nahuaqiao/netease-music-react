import React from 'react'

import {
  Card,
  CardContent,
  CardMedia,
  CardActionArea,
  Typography,
  Skeleton,
  Tooltip,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'

import styled from '@emotion/styled'

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

const TypographyLink = styled(Typography)(() => ({
  '&:hover': {
    textDecoration: 'underline',
  },
}))

const PlaylistCard = ({
  id,
  name,
  coverImgUrl,
  playCount,
  trackCount,
}: PlaylistCardPropType) => {
  const [raised, setRaised] = React.useState(false)

  const navigate = useNavigate()

  const handleClickPlaylist = (id: number) => {
    const res = navigate(`/playlist/${id}`)
    console.log(res)
  }

  return (
    <Card
      sx={{ maxWidth: 185 }}
      raised={raised}
      onMouseEnter={() => setRaised(true)}
      onMouseLeave={() => setRaised(false)}>
      <CardActionArea onClick={() => handleClickPlaylist(id)}>
        <CardMedia component='img' image={coverImgUrl} alt={name}></CardMedia>
      </CardActionArea>

      <CardContent
        className='SingleLineTextOverflowEllipsis'
        sx={{
          textAlign: 'center',
        }}>
        <Tooltip title={name}>
          <TypographyLink
            color='inherit'
            variant='caption'
            sx={{ cursor: 'pointer' }}
            onClick={() => handleClickPlaylist(id)}>
            {name}
          </TypographyLink>
        </Tooltip>
      </CardContent>
    </Card>
  )
}

export const PlaylistCardSkeleton = () => {
  const [raised, setRaised] = React.useState(false)

  return (
    <Card
      sx={{ maxWidth: 185 }}
      raised={raised}
      onMouseEnter={() => setRaised(true)}
      onMouseLeave={() => setRaised(false)}>
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
  )
}

export default PlaylistCard
