import React, { Component } from "react";
import Project from "../components/Project";
import projects from "../projects.json";

class Portfolio extends Component {

  state = {
    projects
  };

  render() {
    return (

      <div className="bg-white">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Portfolio</h2>
              <p className="text-xl text-gray-600">I chose a variety of projects that showcase my knowledge and technical experience in HTML5, CSS (Bootstrap and Tailwind), Javascript, JQuery, Node, MySQL, MongoDB, Express, Handlebars.js, and React.</p>
            </div>

            <div className="lg:col-span-2">
              {this.state.projects.map(project => (
                <Project
                  id={project.id}
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  summary={project.summary}
                  link={project.link}
                  github={project.github}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Portfolio;