import { XMarkIcon, PlayIcon } from '@heroicons/react/24/solid'

export function BingeMode() {
  return (
    <>
      <div className="h-10 w-10 rounded-full bg-indigo-800 hover:bg-indigo-700 flex">
        <XMarkIcon className='h-6 w-6 my-auto m-auto text-indigo-200' />
      </div>
      <div className="h-10 w-50 rounded-full bg-indigo-800 hover:bg-indigo-700 flex">
        <PlayIcon className='h-6 w-6 my-auto ml-3 mr-2 text-indigo-200' />
        <p className='text-indigo-200 text-sm my-auto mr-auto'>Neste episode om 8...</p>
      </div>
    </>
  )
}
