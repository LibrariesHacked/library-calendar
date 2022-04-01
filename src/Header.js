import React, { useState } from 'react'

import { Link, useLocation } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Hidden from '@mui/material/Hidden'
import IconButton from '@mui/material/IconButton'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'

import BookIcon from '@mui/icons-material/BookTwoTone'
import CancelIcon from '@mui/icons-material/CancelTwoTone'
import DirectionBusIcon from '@mui/icons-material/DirectionsBusTwoTone'
import GridOnIcon from '@mui/icons-material/GridOnTwoTone'
import HeadsetIcon from '@mui/icons-material/HeadsetTwoTone'
import LocalLibraryIcon from '@mui/icons-material/LocalLibraryTwoTone'
import MapIcon from '@mui/icons-material/MapTwoTone'
import MovieIcon from '@mui/icons-material/MovieTwoTone'
import SearchIcon from '@mui/icons-material/SearchTwoTone'
import PetsIcon from '@mui/icons-material/PetsTwoTone'

import { useSearchStateValue } from './context/searchState'

function Header (props) {
  const { site } = props
  const [{ currentServiceSystemName }] = useSearchStateValue() //eslint-disable-line

  const [appsOpen, setAppsOpen] = useState(false)
  const [tabValue, setTabValue] = useState(site)

  const location = useLocation()

  const currentServicePath = path => {
    if (currentServiceSystemName)
      return path + '?service=' + currentServiceSystemName
    return path
  }

  const sites = [
    {
      title: 'Library lab',
      url: 'https://www.librarylab.uk',
      icon: <PetsIcon />,
      links: [
        {
          title: 'About library lab',
          short: 'Lab',
          icon: <PetsIcon />,
          to: '/'
        }
      ]
    },
    {
      title: 'Libraries at home',
      url: 'https://www.librariesathome.co.uk',
      icon: <LocalLibraryIcon />,
      links: [
        {
          title: 'Find service',
          short: 'Find',
          icon: <SearchIcon />,
          to: currentServicePath('/')
        },
        {
          title: 'Watch library TV',
          short: 'Watch',
          icon: <MovieIcon />,
          to: '/watch'
        },
        {
          title: 'Read blogs',
          short: 'Read',
          icon: <BookIcon />,
          to: '/read'
        },
        {
          title: 'Listen podcasts',
          short: 'Listen',
          icon: <HeadsetIcon />,
          to: '/listen'
        }
      ]
    },
    {
      title: 'Mobile libraries',
      url: 'https://www.mobilelibraries.org',
      icon: <DirectionBusIcon />,
      links: [
        {
          title: 'Find my stop',
          short: 'Stops',
          icon: <GridOnIcon />,
          to: '/'
        },
        {
          title: 'Mobile vans',
          short: 'Vans',
          icon: <DirectionBusIcon />,
          to: '/mobiles'
        },
        {
          title: 'Map of stops',
          short: 'Map',
          icon: <MapIcon />,
          to: '/map'
        }
      ]
    },
    {
      title: 'Library map',
      url: 'https://www.librarymap.co.uk',
      icon: <MapIcon />,
      links: [
        {
          title: 'Find my library',
          short: 'Find',
          icon: <GridOnIcon />,
          to: currentServicePath('/')
        },
        {
          title: 'Map of libraries',
          short: 'Map',
          icon: <MapIcon />,
          to: currentServicePath('/map')
        }
      ]
    }
  ]

  return (
    <>
      <Container maxWidth='lg'>
        <Toolbar>
          <IconButton
            aria-label='Toggle site menu'
            color='primary'
            onClick={() => {
              setAppsOpen(!appsOpen)
              setTabValue(site)
            }}
          >
            {appsOpen ? <CancelIcon /> : <PetsIcon />}
          </IconButton>
          <span />
        </Toolbar>
      </Container>
      {appsOpen ? (
        <AppBar position='static' color='transparent' elevation={0}>
          <Container maxWidth='lg'>
            <Tabs
              value={tabValue}
              onChange={(e, v) => {
                setTabValue(v)
              }}
              variant='scrollable'
              scrollButtons='on'
              indicatorColor='primary'
              textColor='secondary'
            >
              {sites.map((s, idx) => {
                return (
                  <Tab key={'tb_site_' + idx} label={s.title} icon={s.icon} />
                )
              })}
            </Tabs>
          </Container>
        </AppBar>
      ) : null}
      <AppBar position='static' color='transparent' elevation={0}>
        <Container maxWidth='lg'>
          <Toolbar>
            <Hidden mdUp>
              {sites[tabValue].links.map((link, idx) => {
                return (
                  <Tooltip title={link.title} key={'icnb_menu_lg_' + idx}>
                    <Button
                      component={Link}
                      to={
                        tabValue === site
                          ? link.to
                          : sites[tabValue].url + link.to
                      }
                      disableRipple={location.pathname === link.to}
                      disableFocusRipple={location.pathname === link.to}
                      color='secondary'
                      size='large'
                      startIcon={link.icon}
                    >
                      {link.short}
                    </Button>
                  </Tooltip>
                )
              })}
            </Hidden>
            <Hidden smDown>
              {sites[tabValue].links.map((link, idx) => {
                return (
                  <Tooltip title={link.title} key={'icnb_menu_lg_' + idx}>
                    <Button
                      component={Link}
                      to={
                        tabValue === site
                          ? link.to
                          : sites[tabValue].url + link.to
                      }
                      disableRipple={location.pathname === link.to}
                      disableFocusRipple={location.pathname === link.to}
                      color='secondary'
                      size='large'
                      startIcon={link.icon}
                    >
                      {link.title}
                    </Button>
                  </Tooltip>
                )
              })}
            </Hidden>
            <span />
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Header