import React from 'react'
import { Typography, Input, Button } from '@mui/material'
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import { Box } from '@mui/system'
function HomeView() {
  const [inputValue, setInputValue] = useState('')
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant="h2"> Dikto </Typography>
      <Typography>Vocabulary is a click away</Typography>
      <Input onChange={(e) => setInputValue(e.target.value)}> </Input>
      <Link to={`/${inputValue}`}>
        <Button sx={{ mt: 3 }} variant="contained">
          Go to word
        </Button>
      </Link>
    </Box>
  )
}

export default HomeView
