import React,{useState} from 'react'



export default function AccordationCard({ title, content }) {
    
    const[isActive, setIsActive] = useState(false)

  return (
    <div className="lg:w-768 mx-auto h-21 w-fit ">
          <div className="lg:w-768 mx-auto h-21 w-fit " onClick={()=> setIsActive(!isActive)}>
              <div className='font-medium text-lg text-darkBlue'>{ title}</div>         
      </div>
    </div>
  );
}
