import { useState, useEffect } from 'react'
import { getAudioManager } from '../utils'

export default useAudio = (url) => {
  const [playing, setPlaying] = useState(false)

  const audio = getAudioManager()
  audio.src = url

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    playing ? audio.play() : audio.pause()
  }, [playing])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])

  return [playing, toggle]
}
