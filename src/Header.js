import React, { useState } from 'react'

import { Link, useLocation } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Hidden from '@mui/material/Hidden'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'

import PetsIcon from '@mui/icons-material/PetsTwoTone'

import { useSearchStateValue } from './context/searchState'

import sites from './sites'

function Header (props) {
  const { site } = props
  const [{ currentServiceSystemName }] = useSearchStateValue() //eslint-disable-line

  const [siteValue, setSiteValue] = useState(site)

  const location = useLocation()

  return (
    <>
      <Container maxWidth='lg'></Container>

      <AppBar position='static' color='transparent' elevation={0}>
        <Container maxWidth='lg'>
          <Toolbar>
            <SpeedDial
              ariaLabel='Site selector'
              icon={<PetsIcon />}
              direction='down'
              FabProps={{
                size: 'medium',
                sx: {
                  boxShadow: 0
                }
              }}
            >
              {sites.map((s, idx) => {
                return (
                  <SpeedDialAction
                    key={'tb_site_' + idx}
                    icon={s.icon}
                    tooltipTitle={s.title}
                    onClick={() => {
                      setSiteValue(idx)
                    }}
                    sx={{ boxShadow: 0 }}
                  />
                )
              })}
            </SpeedDial>
            <Hidden mdUp>
              {sites[siteValue].links.map((link, idx) => {
                return (
                  <Tooltip title={link.title} key={'icnb_menu_lg_' + idx}>
                    <Button
                      component={Link}
                      to={
                        siteValue === site
                          ? link.to
                          : sites[siteValue].url + link.to
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
              {sites[siteValue].links.map((link, idx) => {
                return (
                  <Tooltip title={link.title} key={'icnb_menu_lg_' + idx}>
                    <Button
                      component={Link}
                      to={
                        siteValue === site
                          ? link.to
                          : sites[siteValue].url + link.to
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
