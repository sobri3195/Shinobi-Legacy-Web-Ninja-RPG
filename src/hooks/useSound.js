import { useEffect, useRef } from 'react'
import { Howl } from 'howler'
import { useSelector } from 'react-redux'

export const useSound = (src, options = {}) => {
  const soundRef = useRef(null)
  const { soundEnabled, soundVolume } = useSelector(state => state.game.settings)

  useEffect(() => {
    if (src) {
      soundRef.current = new Howl({
        src: [src],
        volume: soundVolume,
        ...options
      })
    }

    return () => {
      if (soundRef.current) {
        soundRef.current.unload()
      }
    }
  }, [src])

  const play = () => {
    if (soundEnabled && soundRef.current) {
      soundRef.current.play()
    }
  }

  const stop = () => {
    if (soundRef.current) {
      soundRef.current.stop()
    }
  }

  const pause = () => {
    if (soundRef.current) {
      soundRef.current.pause()
    }
  }

  return { play, stop, pause }
}

export const useBackgroundMusic = (src) => {
  const musicRef = useRef(null)
  const { musicEnabled, musicVolume } = useSelector(state => state.game.settings)

  useEffect(() => {
    if (src && musicEnabled) {
      musicRef.current = new Howl({
        src: [src],
        volume: musicVolume,
        loop: true,
        autoplay: true
      })

      musicRef.current.play()
    }

    return () => {
      if (musicRef.current) {
        musicRef.current.unload()
      }
    }
  }, [src, musicEnabled])

  return musicRef
}
