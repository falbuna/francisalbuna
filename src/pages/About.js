import React from "react";
import bio from "../assets/images/bio-image.jpg"

function About(){
    return(

<div className="bg-white overflow-hidden">
  <div className="relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div className="hidden lg:block bg-gray-50 absolute top-0 bottom-0 left-3/4 w-screen"></div>
    <div className="mx-auto text-base max-w-prose lg:max-w-none">
      <h2 className="text-base text-blue1 font-semibold tracking-wide uppercase">About Me</h2>
      <h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">Hi! I am Francis Albuna</h3>
    </div>
    <div className="mt-8 lg:grid lg:grid-cols-2 lg:gap-8">
      <div className="relative lg:row-start-1 lg:col-start-2">
        <svg className="hidden lg:block absolute top-0 right-0 -mt-20 -mr-20" width="404" height="384" fill="none" viewBox="0 0 404 384" aria-hidden="true">
          <defs>
            <pattern id="de316486-4a29-4312-bdfc-fbce2132a2c1" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="404" height="384" fill="url(#de316486-4a29-4312-bdfc-fbce2132a2c1)" />
        </svg>
        <div className="relative text-base mx-auto max-w-prose lg:max-w-none">
          <figure>
            <div className="aspect-w-12 aspect-h-7 lg:aspect-none">
              <img className="rounded-lg shadow-lg object-cover object-center" src={bio} alt="Francis on a beach in Boracay." width="1184" height="1376" />
            </div>
            {/* <figcaption className="mt-3 flex text-sm text-gray-500"> */}
              
              {/* <svg className="flex-none w-5 h-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg> */}
              {/* <span className="ml-2">Photograph by Marcus O'Leary</span> */}
            {/* </figcaption> */}
          </figure>
        </div>
      </div>
      <div className="mt-8 lg:mt-0">
        <div className="text-base max-w-prose mx-auto lg:max-w-none">
          <p className="text-lg font-bold text-black">Welcome to my personal portfolio.</p>
        </div>
        <div className="mt-5 prose prose-indigo text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
          <p>I graduated in 2010 with a Bachelor of Science in Electrical Engineering at the University of California, Irvine. I am currently enrolled in the 6-month coding program at the University of California, San Diego Extension.</p>
          <p>While taking the 6-month coding program, I found a passion in creating responsive and user-friendly applications and further my understanding in new and existing technologies. I am also determined in using my extensive experience in electronics and IT support to succeed in a different career field and web development.</p>
          <p>In my spare time, you can find me cooking, watching movies, playing video games, or staying active by lifting weights or hiking.</p>
          {/* <ul>
            <li>Quis elit egestas venenatis mattis dignissim.</li>
            <li>Cras cras lobortis vitae vivamus ultricies facilisis tempus.</li>
            <li>Orci in sit morbi dignissim metus diam arcu pretium.</li>
          </ul>
          <p>Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
          <h3>How we helped</h3>
          <p>Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet. Laoreet sem est phasellus eu proin massa, lectus. Diam rutrum posuere donec ultricies non morbi. Mi a platea auctor mi.</p>
          <p>Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi.</p> */}
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default About;