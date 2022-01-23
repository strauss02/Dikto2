import React from 'react'
import { Typography, Input, Button } from '@mui/material'
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
function HomeView() {
  const [inputValue, setInputValue] = useState('')
  return (
    <div>
      <Typography variant="h2"> Dikto </Typography>
      Welcome my dear friend
      <Input onChange={(e) => setInputValue(e.target.value)}> </Input>
      <Link to={`/${inputValue}`}>
        <Button sx={{ display: 'block', mt: 3 }} variant="contained">
          Go to word
        </Button>
      </Link>
    </div>
  )
}

export default HomeView
