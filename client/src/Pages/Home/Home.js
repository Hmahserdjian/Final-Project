import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import Footer from "../../Components/Footer";
import { Container } from "../../Components/Grid";
import Login from "../../Components/Login";
import Nav from "../../Components/Nav";

class App extends Component {
  render() {
    return (
      <div>
    <Container>
             <Nav/>
    </Container> 
        <Jumbotron>
        
         <h1 className="text-center">
                <strong>Researcher</strong>
            </h1>
              <h2 className="text-center">
                   The place for nonsense research.
              </h2>
          
        </Jumbotron>

         
            
            <Container>
             <Login/>
            </Container>

                <Footer/>
       
          
                          
      </div>
      
    );
  }
}

export default App;