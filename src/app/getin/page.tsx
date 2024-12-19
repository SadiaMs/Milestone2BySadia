import React from 'react'
import Contact from '../components/Contact'

const page = () => {
  return (
    <div>

<div className="flex flex-col items-center mb-10">
          <div className="w-40% h-40% flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5">
            <img
              alt="dp"
              className="object-cover object-center h-[100%] w-full"
              src="/dp.png"
            />
          </div>
          <h1>Lets Work Together ! </h1>
        </div>
      <Contact />
    </div>
  )
}

export default page
