import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom"
import About from "./pages/About";
import Header from "./components/Header";
import './index.css';

function App() {
  return (
    <Router>
    <div div className="bg-sand">
      <Header />
        <Route exact path="/" component={About} /> 
        <Route exact path="/about" component={About} />
    </div>
    </Router>
  );
}

export default App;
