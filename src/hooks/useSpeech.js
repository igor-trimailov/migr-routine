import { useState, useEffect, useRef } from 'react'
import { getLocale } from '../utils'

function getLocaleVoice(voices, locale) {
  const preferredVoice = voices.find((voice) => voice.name === locale.voice)

  // seems like voice locale can be either en-GB or en_GB, so just find first
  // without special symbols
  return preferredVoice
    ? preferredVoice
    : voices.find(
        (voice) =>
          voice.lang.replace(/[^a-zA-Z]/gi, '') ===
          locale.voiceLanguage.replace(/[^a-zA-Z]/gi, '')
      )
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
    const locale = getLocale()
    const synth = window.speechSynthesis
    const voices = synth.getVoices()

    const handleVoiceChange = () => {
      setVoicesLoaded((loaded) => !loaded)
    }

    // voices are loaded async
    if (!voices.length) {
      synth.addEventListener('voiceschanged', handleVoiceChange, true)
    } else {
      const utter = new SpeechSynthesisUtterance()
      utter.text = text
      utter.lang = locale.voiceLanguage
      utter.voice = getLocaleVoice(voices, locale)
      utter.onstart = savedStartCallback.current
      utter.onend = savedEndCallback.current

      // speak!
      synth.speak(utter)
    }

    return () => {
      synth.cancel()

      // safari ios hack
      if (typeof synth.removeEventListener === 'function') {
        synth.removeEventListener('voiceschanged', handleVoiceChange, true)
      }
    }
  }, [text, voicesLoaded])
}

export default useSpeech
