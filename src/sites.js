import BookIcon from '@mui/icons-material/BookTwoTone'
import DirectionBusIcon from '@mui/icons-material/DirectionsBusTwoTone'
import EventIcon from '@mui/icons-material/EventNoteTwoTone'
import GridOnIcon from '@mui/icons-material/GridOnTwoTone'
import HeadsetIcon from '@mui/icons-material/HeadsetTwoTone'
import LocalLibraryIcon from '@mui/icons-material/LocalLibraryTwoTone'
import MapIcon from '@mui/icons-material/MapTwoTone'
import MovieIcon from '@mui/icons-material/MovieTwoTone'
import PetsIcon from '@mui/icons-material/PetsTwoTone'
import SearchIcon from '@mui/icons-material/SearchTwoTone'

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
        to: '/'
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
        to: '/'
      },
      {
        title: 'Map of libraries',
        short: 'Map',
        icon: <MapIcon />,
        to: '/map'
      }
    ]
  },
  {
    title: 'Library calendar',
    url: 'https://www.librarycalendar.co.uk',
    icon: <MapIcon />,
    links: [
      {
        title: 'Event calendar',
        short: 'Month',
        icon: <EventIcon />,
        to: '/'
      }
    ]
  }
]

export default sites
