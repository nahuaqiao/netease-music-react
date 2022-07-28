import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import { alpha, styled } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import InputBase from '@mui/material/InputBase'
import { useNavigate } from 'react-router-dom'
import GitHubIcon from '@mui/icons-material/GitHub'
import { Divider, Link, ListItemIcon } from '@mui/material'
import { PersonAdd, Settings } from '@mui/icons-material'

const pages = [
  {
    text: '推荐',
    url: '/recommend',
  },
  {
    text: '个性化',
    url: '/personalize',
  },
]

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: 'auto',
}))

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',

  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
  },
}))

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null)
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  )

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget)
  }
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  const navigate = useNavigate()

  const navigateTo = (url: string) => {
    navigate(url)
  }

  return (
    <AppBar
      color='default'
      position='sticky'
      elevation={0}
      sx={{
        top: 0,
        backgroundColor: alpha('#fff', 0.7),
        backdropFilter: 'saturate(180%) blur(20px)',
      }}>
      <Toolbar disableGutters>
        <Box
          sx={{
            flexGrow: 1,
            display: { md: 'flex', sm: 'none', xs: 'none' },
          }}>
          <Tooltip title='back'>
            <IconButton
              size='large'
              aria-label='back to last page'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              color='inherit'
              sx={{ display: { xs: 'none', sm: 'none', md: 'flex' } }}>
            </IconButton>
          </Tooltip>
        </Box>

        <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
          <IconButton
            size='large'
            aria-label='account of current user'
            aria-controls='menu-appbar'
            aria-haspopup='true'
            onClick={handleOpenNavMenu}
            color='inherit'>
            <MenuIcon />
          </IconButton>
          <Menu
            id='menu-appbar'
            anchorEl={anchorElNav}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{
              display: { xs: 'block', md: 'none' },
            }}>
            {pages.map(({ text, url }: { text: string; url: string }) => (
              <MenuItem key={text} onClick={() => navigateTo(url)}>
                <Typography textAlign='center' color='inherit'>
                  {text}
                </Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>

        <Box
          sx={{
            flexGrow: 3,
            display: { xs: 'none', sm: 'none', md: 'block' },
          }}></Box>

        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
          {pages.map(({ text, url }: { text: string; url: string }) => (
            <Button
              size='large'
              key={text}
              onClick={() => navigateTo(url)}
              sx={{ my: 2, color: 'black', display: 'block' }}>
              <Typography component='h2' variant='h5'>
                {text}
              </Typography>
            </Button>
          ))}
        </Box>

        <Box sx={{ flexGrow: 1 }}>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder='Search…'
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Box>

        <Box>
          <IconButton
            size='small'
            onClick={handleOpenUserMenu}
            sx={{ p: 0, m: 4 }}>
            <Avatar alt='游客' />
          </IconButton>
          <Menu
            sx={{ mt: '45px' }}
            id='menu-appbar'
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}>
            <MenuItem onClick={() => navigateTo('/login')}>
              <ListItemIcon>
                <PersonAdd fontSize='small' />
              </ListItemIcon>
              登录
            </MenuItem>

            <MenuItem onClick={() => navigateTo('/settings')}>
              <ListItemIcon>
                <Settings fontSize='small' />
              </ListItemIcon>
              设置
            </MenuItem>

            <Divider />

            <MenuItem>
              <Link
                component='a'
                underline='none'
                variant='inherit'
                href='https://github.com/nahuaqiao/netease-music-react'
                sx={{
                  color: 'inherit',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <ListItemIcon>
                  <GitHubIcon fontSize='small' />
                </ListItemIcon>
                github
              </Link>
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  )
}
export default ResponsiveAppBar
