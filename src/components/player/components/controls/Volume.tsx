import { useState } from 'react'
import { SpeakerWaveIcon, SpeakerXMarkIcon } from '@heroicons/react/24/solid'

export function Volume() {
  const [muted, setMuted] = useState(false)
  return (
    <div className="h-10 w-10 rounded-full bg-indigo-800 hover:bg-indigo-700 flex" onClick={() => setMuted(!muted)}>
      {muted ? <SpeakerXMarkIcon className='h-6 w-6 m-auto text-indigo-200' /> : <SpeakerWaveIcon className='h-6 w-6 m-auto text-indigo-200' />}
    </div>
  )
}
