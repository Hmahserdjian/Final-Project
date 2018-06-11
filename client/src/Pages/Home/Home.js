import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import Footer from "../../Components/Footer";
import { Container } from "../../Components/Grid";
import Nav from "../../Components/Nav";

class Home extends Component {
  render() {
    return (
      <div>
  
             <Nav/>
    
        <Jumbotron>
         <h1 className="text-center">
                <strong>Researcher</strong>
            </h1>
              <h2 className="text-center">
                   The place for nonsense research.
              </h2>
        </Jumbotron>
            <Container>
                <p>Have you ever tried going to sleep at night and all of the sudden you wondering how or why something exsists.
                  If so Welcome to my web app. This is the place where you can answer those questions for the world to see in one place.
                </p>
            </Container>

                <Footer/>
       
          
                          
      </div>
      
    );
  }
}

export default Home;