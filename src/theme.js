import { createTheme } from '@mui/material/styles'

import { lightBlue, blueGrey } from '@mui/material/colors'

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        },
        text: {
          textTransform: 'none'
        }
      }
    }
  }
})

export default theme
