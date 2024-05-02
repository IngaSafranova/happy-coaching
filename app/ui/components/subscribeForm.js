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
      className="flex h-fit lg:w-[446px] w-screen sm:10/12 mx-auto flex-col pb-10 sm:flex-row md:pb-0 lg:h-11"
    >
      <input
               type="email"
               name='email'
        // pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
        value={email.name}
        onChange={handleChange}
        placeholder="Enter your email"
        className=" mb-6 w-9/12 text-center mx-auto sm:w-1/2 sm:ml-24 sm:p-0 sm:pl-2 sm:m-0 md:mr-4 border-2 border-lightSeasolt px-3 py-4 md:mb-0"
      />
      <button
              type="submit"
            disabled={!canSave}
        className=" h-11 w-[150px] mx-auto rounded-lg sm:px-2 sm:ml-4 bg-complimentaryGreen py-2 text-base font-medium hover:font-semibold text-white md:ml-0"
      >
        Subscribe
      </button>
    </form>
   );
    return content;
}
