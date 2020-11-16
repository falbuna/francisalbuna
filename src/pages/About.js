import React from "react";

function About(){
    return(
        <div className="h-64">
            <div className="p-4 m-4 bg-skyBlue">
                <h1 className="text-2xl font-bold text-white">Tailwind CSS Practice</h1>
            </div>
            <div className="p-4 m-4 bg-blueLight1 h-full">
                <h2 className="text-black">Having fun practicing Tailwind CSS with React</h2>
                <button className="bg-baby1 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">My Tailwind Button</button>
            </div>
        </div>
    )
}

export default About;