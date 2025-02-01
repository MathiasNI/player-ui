import { useState } from 'react'

import { PlayIcon, PauseIcon } from '@heroicons/react/24/solid'

export function Play() {
  const [playing, setPlaying] = useState(true)
  return (
    <div className="h-10 w-10 rounded-full bg-indigo-700 hover:bg-indigo-600 flex" onClick={() => setPlaying(!playing)}>
      {playing ? <PlayIcon className='h-6 w-6 pl-0.5 m-auto text-indigo-200' /> : <PauseIcon className='h-6 w-6 m-auto text-indigo-200' />}
    </div>
  )
}
