import React from "react";
import { useState } from "react";


export default function Cookie(){

 const [nameinput, setNameInput] = useState("");

 const handleChange = (e) => {
    setNameInput(e.target.value);
    console.log(e.target.value)
}

const onSubmitHandler = (e) => {
    e.preventDefault();
    nameuser:nameinput
    alert(" Please  fill  this Form with the information  about your Cookie Stand")
  
}

return(
<div class="container my-24 px-6 mx-auto">

<section class="mb-32 text-gray-800">
  <div
    class="relative overflow-hidden bg-no-repeat bg-cover"
    style={{
      backgroundposition:" 50%",
      backgroundImage: `url("https://mdbootstrap.com/img/new/textures/full/66.jpg")`,
      height: "300px" }}
  ></div>
  <div class="container text-gray-800 px-4 md:px-12">
    <div
      class="block rounded-lg shadow-lg py-10 md:py-12 px-4 md:px-6"
      style={{
        margintop: "-100px",
        backdropfilter: "blur(30px)"
      }}
    >
      <div class="flex flex-wrap justify-center text-center lg:text-left">
        <div class="grow-0 shrink-0 basis-auto w-full xl:w-10/12 px-6">
          <div class="grid lg:grid-cols-2 gap-x-6 items-center">
            <div class="mb-10 lg:mb-0">
              <h2 class="text-3xl font-bold">
                Welcome to our App.
                <br />
                <span class="text-blue-600">Please Enter Your Name and Follow The Instructions</span>
              </h2>
            </div>

            <div class="mb-6 md:mb-0">
              <div class="md:flex flex-row">
                <input
                  type="text"
                  class="form-control block w-full px-4 py-2 mb-2 md:mb-0 md:mr-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Enter your Name"
                  onChange={handleChange}
                />
                <button
                 onClick={onSubmitHandler}

                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>



)

}