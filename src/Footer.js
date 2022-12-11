/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import React from 'react'
import { Link } from 'react-router-dom'

import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import MaterialLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

function Footer () {
  return (
    <div
      css={css`
        padding: 10px;
      `}
    >
      <Divider sx={{ margin: '20px' }} />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Typography variant='h5'>
            <MaterialLink
              component={Link}
              to='/'
              title='Go to the main calendar page'
            >
              Home
            </MaterialLink>
            <span> &#8226; </span>
            <MaterialLink
              href='https://www.librarylab.uk/libraries-at-home'
              target='_blank'
              rel='noopener'
              title='About the library lab projects and documentation for this project'
            >
              About
            </MaterialLink>
            <span> &#8226; </span>
            <MaterialLink
              component={Link}
              to='/privacy'
              title='Your privacy on this site'
            >
              Privacy
            </MaterialLink>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}></Grid>
      </Grid>
    </div>
  )
}

export default Footer
