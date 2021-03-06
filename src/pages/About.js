import React from "react";

function About() {
  return (

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
                  <img className="rounded-lg shadow-lg object-cover object-center" src="/assets/images/bio-image.jpg" alt="Francis on a beach in Boracay." width="1184" height="1376" />
                </div>
              </figure>
            </div>
          </div>
          <div className="mt-8 lg:mt-0">
            <div className="text-base max-w-prose mx-auto lg:max-w-none">
              <p className="text-lg font-bold text-black">And welcome to my personal portfolio.</p>
            </div>
            <div className="mt-5 prose prose-indigo text-gray-600 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1">
              <p>I graduated in 2010 with a Bachelor of Science in Electrical Engineering at the University of California, Irvine. I recently completed a 6-month coding program at the University of California, San Diego Extension.</p>
              <p>While taking the 6-month coding program, I found a passion in creating responsive and user-friendly applications and interest in developing my understanding in new and existing technologies. I am also determined in using my extensive experience in electronics troubleshooting, manufacturing leadership and development, and IT support to succeed and excel in a different career field.</p>
              <p>In my spare time, you can find me cooking, watching movies, learning a new technology, or staying active by lifting weights or hiking.</p>
              <p className="text-lg font-bold text-black">Technical Skills:</p>
              <div className="-mt-4">
                <ul>
                  <li>Javascript</li>
                  <li>React</li>
                  <li>NodeJS</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>CSS Frameworks(Tailwind and Bootstrap)</li>
                  <li>Java</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default About;