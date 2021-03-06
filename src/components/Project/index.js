import React from "react";

function Project(props) {

  return (

    <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
      <li className="sm:py-8">
        <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
          <a href={props.link} target="_blank" rel="noreferrer">
            <div className="opacity-50 hover:opacity-100 aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
              <img className="object-cover shadow-lg rounded-lg" src={props.image} alt={props.title} />
            </div>
          </a>
          <div className="sm:col-span-2">
            <div className="space-y-4">
              <div className="text-lg leading-6 font-medium space-y-1">
                <h3>{props.title}</h3>
                <p className="text-indigo-400">{props.description}</p>
              </div>
              <div className="text-lg">
                <p className="text-gray-600">{props.summary}</p>
              </div>
              <ul className="flex space-x-5">
                <li>
                  <a href={props.link} target="_blank" rel="noreferrer">
                    <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      Live
                          </button>
                  </a>
                </li>
                <li>
                  <a href={props.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-gray-700">
                    <span className="sr-only">Github</span>
                    <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
    </ul>

  )
}
export default Project;