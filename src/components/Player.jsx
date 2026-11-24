import { usePlayerStore } from "@/store/playerStore"
import { useEffect, useRef, useState } from "react"
import { Slider } from "./Slider"

export const Pause = ({ className }) => (
  <svg className={className} role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path></svg>
)

export const Play = ({ className }) => (
  <svg className={className} role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16"><path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path></svg>
)

export const VolumeSilence = () => (
  <svg fill="currentColor" role="presentation" height="16" width="16" aria-hidden="true" aria-label="Volumen apagado" viewBox="0 0 16 16" >
    <path d="M13.86 5.47a.75.75 0 0 0-1.061 0l-1.47 1.47-1.47-1.47A.75.75 0 0 0 8.8 6.53L10.269 8l-1.47 1.47a.75.75 0 1 0 1.06 1.06l1.47-1.47 1.47 1.47a.75.75 0 0 0 1.06-1.06L12.39 8l1.47-1.47a.75.75 0 0 0 0-1.06z"></path>
    <path d="M10.116 1.5A.75.75 0 0 0 8.991.85l-6.925 4a3.642 3.642 0 0 0-1.33 4.967 3.639 3.639 0 0 0 1.33 1.332l6.925 4a.75.75 0 0 0 1.125-.649v-1.906a4.73 4.73 0 0 1-1.5-.694v1.3L2.817 9.852a2.141 2.141 0 0 1-.781-2.92c.187-.324.456-.594.78-.782l5.8-3.35v1.3c.45-.313.956-.55 1.5-.694V1.5z"></path>
  </svg>
)

export const Volume = () => (
  <svg fill="currentColor" role="presentation" height="16" width="16" aria-hidden="true" aria-label="Volumen alto" id="volume-icon" viewBox="0 0 16 16">
    <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
    <path d="M11.5 13.614a5.752 5.752 0 0 0 0-11.228v1.55a4.252 4.252 0 0 1 0 8.127v1.55z"></path>
  </svg>
)

export const VolumeLow = () => (
  <svg fill="currentColor" role="presentation" height="16" width="16" aria-hidden="true" aria-label="Volumen bajo" viewBox="0 0 16 16">
    <path d="M9.741.85a.75.75 0 0 1 .375.65v13a.75.75 0 0 1-1.125.65l-6.925-4a3.642 3.642 0 0 1-1.33-4.967 3.639 3.639 0 0 1 1.33-1.332l6.925-4a.75.75 0 0 1 .75 0zm-6.924 5.3a2.139 2.139 0 0 0 0 3.7l5.8 3.35V2.8l-5.8 3.35zm8.683 4.29V5.56a2.75 2.75 0 0 1 0 4.88z"></path>
  </svg>
)

const CurrentSong = ({ image, title, artists }) => {
  const [imgSrc, setImgSrc] = useState(image);

  const handleImageError = () => {
    setImgSrc('/placeholder.svg');
  };

  // Update image when song changes
  useEffect(() => {
    setImgSrc(image);
  }, [image]);

  return (
    <div className="flex items-center gap-2 md:gap-4 relative overflow-hidden min-w-0">
      <picture className="w-10 h-10 md:w-14 md:h-14 bg-surface-light rounded-md shadow-lg overflow-hidden flex-shrink-0">
        <img
          src={imgSrc || '/placeholder.svg'}
          alt={title}
          onError={handleImageError}
          className="w-full h-full object-cover"
        />
      </picture>

      <div className="flex flex-col min-w-0 overflow-hidden">
        <h3 className="font-semibold text-xs md:text-sm block text-text-bright truncate">
          {title}
        </h3>
        <span className="text-[10px] md:text-xs text-text-muted truncate">
          {artists?.join(', ')}
        </span>
      </div>
    </div>
  )
}

const formatTime = time => {
  if (!Number.isFinite(time) || time < 0) return '0:00'
  const seconds = Math.floor(time % 60)
  const minutes = Math.floor(time / 60)
  return `${minutes}:${seconds.toString().padStart(2, '0')}`
}

const SongControl = ({ audio }) => {
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)

  useEffect(() => {
    const el = audio.current
    if (!el) return

    const handleTimeUpdate = () => setCurrentTime(el.currentTime)
    // duration is NaN until metadata loads (and Infinity for live streams)
    const handleDuration = () => setDuration(Number.isFinite(el.duration) ? el.duration : 0)
    const handleEmptied = () => { setCurrentTime(0); setDuration(0) }

    el.addEventListener('timeupdate', handleTimeUpdate)
    el.addEventListener('loadedmetadata', handleDuration)
    el.addEventListener('durationchange', handleDuration)
    el.addEventListener('emptied', handleEmptied)
    return () => {
      el.removeEventListener('timeupdate', handleTimeUpdate)
      el.removeEventListener('loadedmetadata', handleDuration)
      el.removeEventListener('durationchange', handleDuration)
      el.removeEventListener('emptied', handleEmptied)
    }
  }, [audio])

  return (
    <div className="flex gap-x-2 md:gap-x-3 text-xs pt-2 w-full max-w-[500px] px-2">
      <span className="opacity-50 w-8 md:w-12 text-right text-[10px] md:text-xs">{formatTime(currentTime)}</span>

      <Slider
        value={[Math.min(currentTime, duration)]}
        max={duration}
        min={0}
        disabled={duration === 0}
        className="flex-1 min-w-0"
        label="Progreso de la canción"
        onValueChange={(value) => {
          const [newCurrentTime] = value
          if (audio.current && Number.isFinite(newCurrentTime)) audio.current.currentTime = newCurrentTime
        }}
      />

      <span className="opacity-50 w-8 md:w-12 text-[10px] md:text-xs">
        {formatTime(duration)}
      </span>
    </div>
  )
}

const VolumeControl = () => {
  const volume = usePlayerStore(state => state.volume)
  const setVolume = usePlayerStore(state => state.setVolume)
  const previousVolumeRef = useRef(volume)

  // Only consider muted when volume is exactly 0
  const isMuted = volume === 0
  const isLowVolume = volume > 0 && volume < 0.5
  const isHighVolume = volume >= 0.5

  const handleClickVolumen = () => {
    if (isMuted) {
      // Restore previous volume (default to 0.5 if no previous)
      setVolume(previousVolumeRef.current > 0 ? previousVolumeRef.current : 0.5)
    } else {
      previousVolumeRef.current = volume
      setVolume(0)
    }
  }

  // Volume icon that shows progression
  const VolumeIcon = () => {
    if (isMuted) {
      return <VolumeSilence />
    } else if (isLowVolume) {
      return <VolumeLow />
    } else {
      return <Volume />
    }
  }

  return (
    <div className="hidden md:flex justify-center gap-x-2 text-white items-center">
      <button type="button" className="opacity-70 hover:opacity-100 transition" onClick={handleClickVolumen} aria-label={isMuted ? "Activar sonido" : "Silenciar"}>
        <VolumeIcon />
      </button>

      <Slider
        defaultValue={[100]}
        max={100}
        min={0}
        value={[volume * 100]}
        className="w-[70px] lg:w-[95px]"
        label="Volumen"
        onValueChange={(value) => {
          const [newVolume] = value
          const volumeValue = newVolume / 100
          setVolume(volumeValue)
        }}
      />
    </div>
  )
}


export function Player() {
  const { currentMusic, isPlaying, setIsPlaying, volume, nextTrack, prevTrack } = usePlayerStore(state => state)
  const audioRef = useRef()
  const hasSong = (currentMusic?.song?.audioUrl ?? '').toLowerCase().startsWith('https://')

  // Load the selected track (only HTTPS stream URLs are accepted).
  // Declared before the play/pause effect so that, when a track and isPlaying
  // change together, the source is already set when play/pause runs.
  useEffect(() => {
    const audio = audioRef.current
    const url = currentMusic?.song?.audioUrl
    if (!audio || !url) return
    let parsed
    try { parsed = new URL(url) } catch { parsed = null }
    if (!parsed || parsed.protocol !== 'https:') {
      // Reject the source and stop whatever was playing, so UI and audio agree
      audio.pause()
      audio.removeAttribute('src')
      audio.load()
      setIsPlaying(false)
      return
    }

    audio.src = parsed.href
    audio.volume = Math.min(1, Math.max(0, usePlayerStore.getState().volume))
    audio.play()
      .then(() => setIsPlaying(true))
      .catch((err) => {
        // AbortError just means a newer load/pause superseded this play()
        if (err?.name !== 'AbortError') setIsPlaying(false)
      })
  }, [currentMusic])

  // Play/pause; without a song the state is forced back to "not playing"
  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    if (!currentMusic?.song?.audioUrl || !audio.src) {
      if (isPlaying) setIsPlaying(false)
      return
    }
    if (isPlaying) {
      audio.play().catch((err) => {
        if (err?.name !== 'AbortError') setIsPlaying(false)
      })
    } else {
      audio.pause()
    }
  }, [isPlaying])

  // Volume is applied on change and kept when switching tracks
  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = Math.min(1, Math.max(0, volume))
  }, [volume])

  // Keep the store in sync with the element (media keys, OS controls, track end)
  useEffect(() => {
    const audio = audioRef.current
    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleEnded = () => nextTrack()
    audio.addEventListener('play', handlePlay)
    audio.addEventListener('pause', handlePause)
    audio.addEventListener('ended', handleEnded)
    return () => {
      audio.removeEventListener('play', handlePlay)
      audio.removeEventListener('pause', handlePause)
      audio.removeEventListener('ended', handleEnded)
    }
  }, [nextTrack, setIsPlaying])

  const handlePlayPause = () => {
    if (!hasSong) return
    setIsPlaying(!isPlaying)
  }

  const handlePrev = () => {
    if (hasSong) prevTrack()
  }

  const handleNext = () => {
    if (hasSong) nextTrack()
  }

  return (
    <div className="flex flex-row items-center justify-between w-full px-2 md:px-4 z-50 h-full gap-2 md:gap-4">
      {/* Current song info - flexible width */}
      <div className="flex-shrink-0 w-auto min-w-0 max-w-[120px] sm:max-w-[180px] md:max-w-[250px]">
        <CurrentSong {...currentMusic.song} />
      </div>

      {/* Player controls - centered and flexible */}
      <div className="flex flex-col items-center justify-center flex-1 min-w-0">
        {/* Playback controls with prev/next */}
        <div className="flex items-center gap-3 md:gap-4">
          <button
            className="opacity-70 hover:opacity-100 transition p-2 disabled:opacity-30 disabled:cursor-not-allowed"
            onClick={handlePrev}
            disabled={!hasSong}
            title="Anterior"
            aria-label="Canción anterior"
            type="button"
          >
            <PrevIcon />
          </button>

          <button
            className="bg-white text-black rounded-full p-2.5 md:p-2 hover:scale-105 transition disabled:opacity-40 disabled:hover:scale-100 disabled:cursor-not-allowed"
            onClick={handlePlayPause}
            disabled={!hasSong}
            type="button"
            aria-label={isPlaying ? "Pausar" : "Reproducir"}
          >
            {isPlaying ? <Pause /> : <Play />}
          </button>

          <button
            className="opacity-70 hover:opacity-100 transition p-2 disabled:opacity-30 disabled:cursor-not-allowed"
            onClick={handleNext}
            disabled={!hasSong}
            title="Siguiente"
            aria-label="Canción siguiente"
            type="button"
          >
            <NextIcon />
          </button>
        </div>

        {/* Song progress - hidden on very small screens */}
        <div className="hidden sm:flex w-full justify-center">
          <SongControl audio={audioRef} />
        </div>
        <audio ref={audioRef} />
      </div>

      {/* Volume control - hidden on mobile */}
      <div className="flex-shrink-0">
        <VolumeControl />
      </div>
    </div>
  )
}

// Prev/Next Icons
const PrevIcon = () => (
  <svg fill="currentColor" aria-hidden="true" height="16" width="16" viewBox="0 0 16 16">
    <path d="M3.3 1a.7.7 0 0 1 .7.7v5.15l9.95-5.744a.7.7 0 0 1 1.05.606v12.575a.7.7 0 0 1-1.05.607L4 9.149V14.3a.7.7 0 0 1-.7.7H1.7a.7.7 0 0 1-.7-.7V1.7a.7.7 0 0 1 .7-.7h1.6z"></path>
  </svg>
)

const NextIcon = () => (
  <svg fill="currentColor" aria-hidden="true" height="16" width="16" viewBox="0 0 16 16">
    <path d="M12.7 1a.7.7 0 0 0-.7.7v5.15L2.05 1.107A.7.7 0 0 0 1 1.712v12.575a.7.7 0 0 0 1.05.607L12 9.149V14.3a.7.7 0 0 0 .7.7h1.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-1.6z"></path>
  </svg>
)