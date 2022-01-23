import { Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { API_URL } from '../Utils/config'
import { fetchWordData } from '../Utils/utils'
import WordCard from './WordCard'
function WordView(props) {
  let { word } = useParams()
  const [wordEntries, setWordEntries] = useState([])

  useEffect(() => {
    async function getEntries() {
      const entries = await fetchWordData(word)
      setWordEntries(entries)
    }
    getEntries()
  }, [])

  console.log(wordEntries)
  return (
    <div>
      {wordEntries.map((entry) => {
        return <WordCard entry={entry} />
      })}
    </div>
  )
}

export default WordView
