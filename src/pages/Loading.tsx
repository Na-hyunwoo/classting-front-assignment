import React from 'react'
import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'

const Loading = () => {
  return (
    <Box mt={20}>
      <CircularProgress role="loading"/>
    </Box>
  )
}

export default Loading