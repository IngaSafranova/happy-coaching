import React from 'react'
import cn from '@/app/lib/cn'

export default function Button({ text, className, onClick }) {
  return (
      <button
          type='button'
          className={cn('w-62 h-10  rounded-xl bg-complimentaryGreen text-white', className)}
          onClick={onClick}
      >
        {text} 
   </button>
  )
}
