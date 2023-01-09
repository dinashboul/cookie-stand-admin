import React from "react";
import { useState } from "react";
import ReportTable from './ReportTable'

 export default function Form (){
    const [loationinput, setloationinput] = useState("");
    const [mininput, setMinInput] = useState(0);
    const [maxinput, setMaxInput] = useState(0);
    const [averageinput, setAverageInput] = useState(0);


    const [fullReplyState, setFullReplyState] = useState([]);

    const handleChange = (e) => {
        setloationinput(e.target.value);
        console.log(e.target.value)
    }

    const handleMax = (e) => {
        setMaxInput(e.target.value);
        console.log(e.target.value)

    }

    const handleMin = (e) => {
        setMinInput(e.target.value);
        console.log(e.target.value)
    }

    const handleAverage = (e) => {
        setAverageInput(e.target.value);
        console.log(e.target.value)
    }


    const onSubmitHandler = (e) => {
        e.preventDefault();
       
        // save the old values
        const fullReply = {
            location:loationinput|| "no location",
            min:mininput || -1,
            max:maxinput || -1,
            average:averageinput||-1
        }

        // keep the old values and save the new one using spread operator
        setFullReplyState([...fullReplyState,fullReply])

        
    }
    return (
        <>
        <div class=" dark:bg-black bg-gray-100 flex justify-center items-center">
        <div class=" w-2/3 flex flex-col bg-white shadow-lg rounded-lg overflow-hidden">
        <div class="bg-gray-200 text-gray-700 text-lg px-6 py-4">Create Cookie Stand</div>
    
        <div class="flex justify-between items-center px-6 py-4">
          <div class="bg-orange-600 text-xs uppercase px-2 py-1 rounded-full border border-gray-200 text-gray-200 font-bold">Under Review</div>
          <div class="text-sm">Jan 3, 2023</div>
        </div>
    
        <div class="flex justify-center">

     <div class="mb-3 xl:w-96">
    <label for="exampleText0" class="form-label inline-block mb-2 text-gray-700"
      >Location</label
    >
    {/* ////////////////////////////////////////////////////////////////////// */}
    <input
      type="text"
      class="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
      id="exampleText0"
      placeholder=""
      onChange={handleChange}
      onSubmit={onSubmitHandler}
    />
  </div>
</div>
    
        <div class="bg-gray-200 px-6 py-4">
        <form onSubmit={onSubmitHandler} className="py-8 space-y-4 text-base leading-6 text-gray-700 sm:text-lg sm:leading-7">
        <section className="relative">
        <div class="flex justify-center">
  <div>
    <div class="mb-3 xl:w-96">
      <label
        for="exampleFormControlInput2"
        class="form-label inline-block mb-2 text-gray-700 text-xl"
        >Minimum Customer per Hour</label
      >
      {/* ///////////////////////////////////////////////////////////////////// */}
      <input
        type="text"
        class="
          form-control
          block
          w-full
          px-4
          py-2
          text-xl
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="exampleFormControlInput2"
        placeholder="Minimum Customer per Hour"
        onChange={handleMin}
      />
    </div>

    <div class="mb-3 xl:w-96">
      <label for="exampleFormControlInpu3" class="form-label inline-block mb-2 text-gray-700"
        >Maximum Customer per Hour</label
      >
      {/* ////////////////////////////////////////////////////////////////////////////////////// */}
      <input
        type="text"
        class="
          form-control
          block
          w-full
          px-3
          py-1.5
          text-base
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="exampleFormControlInput3"
        onChange={handleMax}
        placeholder="Maximum Customer per Hour"
      />
    </div>

    <div class="mb-3 xl:w-96">
      <label
        for="exampleFormControlInput4"
        class="form-label inline-block mb-2 text-gray-700 text-sm"
        >Average Cookie per Sale</label
      >
        {/* ///////////////////////// */}
      <input
        type="text"
        class="
          form-control
          block
          w-full
          px-2
          py-1
          text-sm
          font-normal
          text-gray-700
          bg-white bg-clip-padding
          border border-solid border-gray-300
          rounded
          transition
          ease-in-out
          m-0
          focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        "
        id="exampleFormControlInput4"
        placeholder="Average Cookie per Sale"
        onChange={handleAverage}
      />
    </div>
  </div>
</div>
        </section>

        <section className="relative">
            <button 
            className="px-2 py-1 text-white rounded-md bg-cyan-900 hover:bg-cyan-700"> Create </button>
        </section>
            </form>
          </div>
        </div>
      </div>
      
      <section className="w-full pt-10 text-center dark:text-white shadow-lg shadow-black-50">
                {fullReplyState.length > 0 && fullReplyState.map((item,index)=>{
                    return(
                        <div>
                            <p>'location' : {item.location}  
                            ,'Minimum customer par Hour': {item.min} 
                            , 'Maximum custumer par Hour' : {item.max} ,
                            'Avaragar' : {item.average}</p>                      
                        </div>
                    )
                })}
            </section>
            
            
            </>
    )

 }