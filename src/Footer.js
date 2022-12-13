/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'

import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
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
          <Typography variant='body1'>Developed by Libraries Hacked</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6}></Grid>
      </Grid>
    </div>
  )
}

export default Footer
