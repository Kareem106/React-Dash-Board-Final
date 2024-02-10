import React from 'react'

function ProgressBar({rate}) {
    let width=(rate/5)*100;
  return (
<div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div className="bg-blue-600 h-2.5 rounded-full" style={{width: `${width}%`}}></div>
</div>
  )
}

export default ProgressBar