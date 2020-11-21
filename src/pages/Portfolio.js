import React, { Component } from "react";
import PortfolioCard from "../components/PortfolioCard";
import projects from "../projects.json";

class Portfolio extends Component {
    state = {
        projects
    };

    render(){
        return(
        <div className="h-screen/3 bg-sand">
            <div className="p-4 m-4 bg-white box-border">
                <h1 className="text-2xl font-bold text-blue1">Portfolio</h1>
            </div>
            {this.state.projects.map(project => (
                <PortfolioCard 
                    id={project.id}
                    key={project.id}
                    name={project.name}
                    description={project.description}
                />
            ))}
        </div>
        );
    }
}

export default Portfolio;