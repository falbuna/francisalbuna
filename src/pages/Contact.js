import React from "react";

function Contact() {
  return (

    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="space-y-5 sm:space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Contact</h2>
            <p className="text-xl text-gray-600"> You can contact me by filling out the information in the form and clicking submit.</p>
            <p className="text-xl text-gray-600"> You can also reach me at my email here: <a className="text-gray-700 hover:text-blue1" href="mailto:falbuna1@gmail.com">falbuna1@gmail.com</a>.</p>
          </div>


          <div className="mt-5 md:mt-0 md:col-span-2">
            <form>
              <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                  <div className="grid grid-cols-6 gap-6">

                    <div className="col-span-6 sm:col-span-5">
                      <label htmlFor="first_name" className="block text-sm font-medium text-gray-700 ">Name</label>
                      <input type="text" id="first_name" placeholder="Enter Name" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md border border-gray-400" />
                    </div>

                    <div className="col-span-6 sm:col-span-5">
                      <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
                      <input type="text" id="email_address" placeholder="example@email.com" className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md border border-gray-400" />
                    </div>

                    <div className="col-span-5 ">
                      <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Message</label>
                      <textarea type="text" id="message" rows="3" placeholder="Please enter a brief message." className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md border border-gray-400" />
                    </div>

                  </div>
                </div>
                <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-blue1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" onClick={() => alert("Submitted.")}>
                    Submit
            </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>



  )
}

export default Contact;
