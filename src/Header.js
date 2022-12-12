import { Link } from 'react-router-dom'

import Box from '@mui/material/Box'
import MaterialLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'

function Footer () {
  return (
    <Box
      sx={{
        textAlign: 'center',
        padding: '10px'
      }}
    >
      <Typography variant='h5' gutterBottom>
        <MaterialLink
          component={Link}
          to='/'
          title='Go to the main calendar page'
        >
          Home
        </MaterialLink>
        <span> &#8226; </span>
        <MaterialLink component={Link} to='/about' title='About this project'>
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
      <img src='logo_128.png' alt='Library calendar logo' />
      <Typography variant='h2' component='h1'>
        Library calendar
      </Typography>
      <Typography
        variant='h5'
        component='p'
        gutterBottom
        sx={{
          backgroundColor: '#fafafa',
          padding: '10px',
          borderRadius: '5px'
        }}
      >
        Key dates in the public library year
      </Typography>
    </Box>
  )
}

export default Footer
