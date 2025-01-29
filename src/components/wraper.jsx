import React from 'react'

const Wraper  = ({children}) => {
  return (
    <>
        <div className='bg-red-50 flex justify-center'>
            <div className='max-w-[1440px] px-[64px]'>
                {children}
            </div>

      </div>
    </>
  )
}

export default Wraper
