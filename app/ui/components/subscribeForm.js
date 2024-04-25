'use client'

import { useState,useRef} from "react";
import { useRouter } from "next/navigation";

const initState = {
  email: "",
};



export default function SubscribeForm() {
  const [email, setEmail] = useState(initState);
  const router = useRouter();
    const ref = useRef(null);
    
  const handleSubmit = async function (event) {
    event.preventDefault();
     console.log(JSON.stringify(email));
    

    //send email to backend router.
    const response = await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email,
      }),
    });
      
      
    const result = await response.json();
    console.log(result);

    document.getElementById("submitForm").reset();
  

      //Navigate to thank-you page.
      router.push('/thank-you/')
  };
    
    function handleChange(event) {
        

 setEmail(event.target.value)        
        
    }
    
    const canSave = [...Object.values(email)].every(Boolean)
    
   const content =(
    <form
           onSubmit={handleSubmit}
           ref={ref}
           id="submitForm"
      className="flex h-fit lg:w-[446px] w-full flex-col pb-10 sm:flex-row md:pb-0 lg:h-11"
    >
      <input
               type="email"
               name='email'
        // pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        value={email.name}
        onChange={handleChange}
        placeholder="Enter your email"
        className=" mb-6 ml-16 mr-4 w-8/12 sm:w-3/4 sm:p-0 sm:pl-2 sm:m-0 md:mr-4 border-2 border-lightSeasolt px-3 py-4 md:mb-0"
      />
      <button
              type="submit"
            disabled={!canSave}
        className="ml-24 h-11 w-[150px] rounded-lg sm:px-2 sm:ml-4 bg-complimentaryGreen py-2 text-base font-medium text-white md:ml-0"
      >
        Subscribe
      </button>
    </form>
   );
    return content;
}
