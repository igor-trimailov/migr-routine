import { useState, useEffect, useRef } from 'react'
import { getLocale } from '../utils'

function getVoice() {
  const locale = getLocale()
  const voices = window.speechSynthesis.getVoices()

  return voices.find((voice) => voice.name === locale.voice)
}

function useSpeech(text, onStart, onEnd) {
  const [voicesLoaded, setVoicesLoaded] = useState(false)
  const savedStartCallback = useRef()
  const savedEndCallback = useRef()

  // save callbacks
  useEffect(() => {
    savedStartCallback.current = onStart
    savedEndCallback.current = onEnd
  }, [onStart, onEnd])

  useEffect(() => {
    const utter = new window.SpeechSynthesisUtterance()
    const voice = getVoice()
    utter.text = text
    utter.voice = voice
    utter.language = getLocale.voiceLanguage
    utter.onstart = savedStartCallback.current
    utter.onend = savedEndCallback.current

    function handleVoiceChange() {
      setVoicesLoaded(true)
    }

    if (!voice) {
      window.speechSynthesis.addEventListener(
        'voiceschanged',
        handleVoiceChange
      )
    } else {
      window.speechSynthesis.speak(utter)
    }

    return () => {
      window.speechSynthesis.cancel()
      window.speechSynthesis.removeEventListener(
        'voiceschanged',
        handleVoiceChange
      )
    }
  }, [text, voicesLoaded])
}

export default useSpeech
