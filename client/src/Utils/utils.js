import { API_URL } from './config'

export async function fetchWordData(word) {
  const answer = await fetch(`${API_URL}/word/${word}`)
  return answer.json()
}
