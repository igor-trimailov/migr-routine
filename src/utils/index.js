import config from '../configuration'

export const getAudioManager = () => {
  if (!window.AudioManager) {
    window.AudioManager = new Audio()
  }

  return window.AudioManager
}

function playSound(sound, callback, numTimes = 1) {
  if (!sound) {
    console.warn('Sound: ' + sound + ' was not found')
    return
  }

  const audio = getAudioManager()
  audio.src = process.env.PUBLIC_URL + '/sounds/' + sound

  const handler = () => {
    audio.removeEventListener('ended', handler)
    numTimes = numTimes - 1

    if (numTimes === 0) {
      if (typeof callback === 'function') {
        callback()
      }
    } else {
      audio.addEventListener('ended', handler)
      audio.play()
    }
  }

  audio.addEventListener('ended', handler)
  audio.play()
}

// reorder function, used in the fancy drag and drop
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list)
  const [removed] = result.splice(startIndex, 1)
  result.splice(endIndex, 0, removed)

  return result
}

// abstract what happend on drag end with fancy drag and drop
function handleDragEnd(result, list, callback) {
  if (!result.destination) {
    return
  }

  if (result.destination.index === result.source.index) {
    return
  }

  const orderedList = reorder(
    list,
    result.source.index,
    result.destination.index
  )

  if (typeof callback === 'function') {
    callback(orderedList)
  }
}

// get selected/default locale. Locale is stored in local storage and shares between
// a few components that need it. Only the locale key is stored, the details are
// stored in the config file.
function getLocale() {
  const { locales, defaultLocale } = config

  const storedLocale = window.localStorage.getItem('fizz-cult-locale')

  return storedLocale && locales[storedLocale]
    ? locales[storedLocale]
    : locales[defaultLocale]
}

// set desired locale in the local storage
function setLocale(newLocale) {
  const oldLocale = getLocale()

  if (oldLocale.locale !== newLocale) {
    window.localStorage.setItem('fizz-cult-locale', newLocale)
  } else {
    console.log('Error: new locale is the same as the old locale')
  }
}

export { playSound, reorder, handleDragEnd, getLocale, setLocale }
