import React from 'react'

export default function Navbar() {
  return (
    <div className='w-full h-fit bg-green-500 flex justify-around align-center'>
        {/* logo */}
        <h1 className=''>Resham</h1>

        {/* navigation */}
        <ul className='flex w-[25%] justify-between'>
            <li>About</li>
            <li>Project</li>
            <li>Blogs</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}
