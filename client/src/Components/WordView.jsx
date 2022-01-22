import { Typography } from '@mui/material'
import React from 'react'
import { useParams } from 'react-router-dom'

function WordView(props) {
  let word = useParams().word

  return (
    <div>
      <Typography> {word} </Typography>
    </div>
  )
}

export default WordView
