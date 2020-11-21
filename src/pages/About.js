import React from "react";
import bio from "../assets/images/bio-image.jpg"

function About(){
    return(
        <div className="h-screen/3 bg-sand">
            <div className="p-4 m-4 bg-white box-border">
                <h1 className="text-2xl font-bold text-blue1">About Me</h1>
            </div>
            <div className="p-4 m-4 bg-white">
            <img className="float-left w-auto h-10px md:w-auto md:h-10px rounded-full" src={bio} alt="Francis" /> 
            <h2 className="p-2 m-2 font-bold text-black">Hi! I am Francis Albuna and welcome to my personal portfolio.</h2>
            <p class="pl-3">I am currently employed as a Manufacturing Technician in San Diego, California. I graduated in 2010 with a Bachelor of Science in Electrical Engineering at the University of California, Irvine. I am also currently enrolled at the 6-month coding program at the University of California, San Diego Extension.</p>
            <br />
            <p class="pl-3">In my spare time, you can find me cooking, watching movies, playing video games, or staying active by lifting weights or hiking. I have also found a new found passion in coding and programming, and I wish to showcase my developing skills in this portfolio.</p>
            </div>
        </div>
    )
}

export default About;