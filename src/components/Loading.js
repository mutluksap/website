import React from 'react'

function Loading() {
  return (
    <div className='container mx-auto min-h-[calc(100vh_-_365px)] flex items-center justify-center'>
        <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

export default Loading