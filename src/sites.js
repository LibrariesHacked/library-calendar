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

export default sites
