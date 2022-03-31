import { createTheme } from '@mui/material/styles'

import { lightBlue, blueGrey } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: lightBlue[800]
    },
    secondary: {
      main: blueGrey[600]
    },
    outline: {
      main: blueGrey[50]
    }
  },
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
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    }
  }
})

export default theme
