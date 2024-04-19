import React from 'react'

export default function SubscribeForm() {
  return (
      <form onSubmit=''
      className='w-[446px] lg:h-11 h-fit pb-10 md:pb-0 flex flex-col sm:flex-row'
      >
          <input
              type='email'
              value=''
              placeholder='Enter your email'
              className=' py-4 px-3 mb-6 md:mb-0 border-2 w-8/12 ml-16 border-lightSeasolt mr-4'
          />
          <button
              type='submit'
              className='w-[150px] h-11 py-2 ml-24 md:ml-0 bg-complimentaryGreen text-white rounded-lg font-medium text-base'
          >
              Subscribe
          </button>
      </form>
  )
}
