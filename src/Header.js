import React, { useState } from 'react'

import { Link, useLocation } from 'react-router-dom'

import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Tooltip from '@mui/material/Tooltip'
import SpeedDial from '@mui/material/SpeedDial'
import SpeedDialAction from '@mui/material/SpeedDialAction'
import useMediaQuery from '@mui/material/useMediaQuery'

import PetsIcon from '@mui/icons-material/PetsTwoTone'

import { styled } from '@mui/material/styles'

import sites from './sites'

const FabSpacer = styled('div')(({ theme }) => ({
  display: 'flex',
  padding: theme.spacing(0, 2)
}))

function Header (props) {
  const { site } = props

  const [siteValue, setSiteValue] = useState(site)
  const [siteSelectorOpen, setSiteSelectorOpen] = useState(false)

  const location = useLocation()

  const mediumScreen = useMediaQuery(theme => theme.breakpoints.up('md'))

  return (
    <>
      <Container maxWidth='lg'></Container>

      <AppBar position='static' color='transparent' elevation={0}>
        <Container maxWidth='lg'>
          <Toolbar>
            <FabSpacer />
            <SpeedDial
              ariaLabel='Site selector'
              icon={<PetsIcon />}
              direction='right'
              open={siteSelectorOpen}
              onOpen={() => {
                setSiteSelectorOpen(true)
              }}
              onClose={() => {
                setSiteSelectorOpen(false)
              }}
              sx={{
                position: 'absolute',
                top: 2,
                left: 0
              }}
              FabProps={{
                size: 'small',
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
                      setSiteSelectorOpen(false)
                      setSiteValue(idx)
                    }}
                    sx={{ boxShadow: 0, backgroundColor: '#fff' }}
                  />
                )
              })}
            </SpeedDial>
            {!siteSelectorOpen && (
              <>
                {sites[siteValue].links.map((link, idx) => {
                  let linkProps = { component: Link, to: link.to }
                  if (siteValue !== site)
                    linkProps = { href: sites[siteValue].url + link.to }
                  return (
                    <Tooltip title={link.title} key={'icnb_menu_lg_' + idx}>
                      <Button
                        {...linkProps}
                        disableRipple={location.pathname === link.to}
                        disableFocusRipple={location.pathname === link.to}
                        color='secondary'
                        size='large'
                        startIcon={link.icon}
                      >
                        {mediumScreen ? link.title : link.short}
                      </Button>
                    </Tooltip>
                  )
                })}
              </>
            )}
          </Toolbar>
        </Container>
      </AppBar>
    </>
  )
}

export default Header
