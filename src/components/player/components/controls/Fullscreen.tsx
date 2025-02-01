import { useState } from 'react'

import { ArrowsPointingOutIcon, ArrowsPointingInIcon } from '@heroicons/react/24/solid'

export function Fullscreen() {
  const [fullscreen, serFullscreen] = useState(false)
  return (
    <div className="h-10 w-10 rounded-full bg-indigo-800 hover:bg-indigo-700 flex" onClick={() => serFullscreen(!fullscreen)}>
      {fullscreen ? <ArrowsPointingInIcon className='h-6 w-6 m-auto text-indigo-200' /> : <ArrowsPointingOutIcon className='h-6 w-6 m-auto text-indigo-200' />}
    </div>
  )
}
