import React from 'react'
import { Typography, Input } from '@mui/material'
import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
function HomeView() {
  const [inputValue, setInputValue] = useState('')
  return (
    <div>
      <Typography> Dikto </Typography>
      Welcome my dear friend
      <Input onChange={(e) => setInputValue(e.target.value)}> </Input>
      <Link to={`/${inputValue}`}> Go to word </Link>
    </div>
  )
}

export default HomeView
