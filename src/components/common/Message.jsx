import React from 'react'

function Message({ message }) {
  return (
    <div className='w-full h-fit flex justify-end my-5'>
      <div className='p-2 bg-gray-800 text-white w-fit max-w-10/12 rounded-2xl'>
        {message}
      </div>
    </div>
  )
}

export default Message