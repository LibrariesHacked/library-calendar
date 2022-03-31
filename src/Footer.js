import React from 'react'
import { Link } from 'react-router-dom'

import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import MaterialLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

function Footer () {
  return (
    <div>
      <Divider />
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
          <Typography variant='button'>
            <MaterialLink
              href='https://www.librarylab.uk/libraries-at-home'
              target='_blank'
              rel='noopener'
              title='About the library lab projects and documentation for this project'
            >
              About this project
            </MaterialLink>
            <span> &#8226; </span>
            <MaterialLink
              component={Link}
              to='/accessibility'
              title='How we make this site accessible'
            >
              Accessibility
            </MaterialLink>
            <span> &#8226; </span>
            <MaterialLink
              component={Link}
              to='/privacy'
              title='Your privacy on this site'
            >
              Privacy
            </MaterialLink>
            <span> &#8226; </span>
            <MaterialLink
              component={Link}
              to='/data'
              title='Data used on this site and licensing'
            >
              Data
            </MaterialLink>
            <span> &#8226; </span>
            <MaterialLink
              href='https://github.com/LibrariesHacked/library-calendar'
              target='_blank'
              rel='noopener'
              title='Project on GitHub'
            >
              GitHub
            </MaterialLink>
          </Typography>
          <br />
          <Typography variant='body2'>
            A Library Lab project by Libraries Hacked.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}></Grid>
      </Grid>
    </div>
  )
}

export default Footer
