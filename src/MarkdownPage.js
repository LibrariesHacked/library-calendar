import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'markdown-to-jsx'

import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'

const options = {
  overrides: {
    h1: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h4',
        color: 'secondary'
      }
    },
    h2: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h5', color: 'secondary' }
    },
    h3: {
      component: Typography,
      props: { gutterBottom: true, variant: 'h6', color: 'secondary' }
    },
    h4: {
      component: Typography,
      props: {
        gutterBottom: true,
        variant: 'h6',
        paragraph: true,
        color: 'secondary'
      }
    },
    p: {
      component: Typography,
      props: { paragraph: true, color: 'secondary' }
    },
    a: { component: Link },
    li: {
      component: ({ classes, ...props }) => (
        <li className={classes.listItem}>
          <Typography component='span' {...props} />
        </li>
      )
    }
  }
}

function MarkdownPage (props) {
  const { page } = props
  const [pageText, setPageText] = useState('')

  useEffect(() => {
    async function fetchPage () {
      const pageData = await window.fetch(page)
      const pageText = await pageData.text()
      setPageText(pageText)
    }
    fetchPage()
  }, [page])

  return (
    <ReactMarkdown options={options} {...props}>
      {pageText}
    </ReactMarkdown>
  )
}

export default MarkdownPage
