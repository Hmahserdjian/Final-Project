import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import Footer from "../../Components/Footer";
import { Container, Row, Col } from "../../Components/Grid";
import Nav from "../../Components/Nav";

class App extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Jumbotron/>
                <Footer/>
                <Container>


                       <Row>
                            < Col size = "md-6" >
                                <label>Name
                                    <input type="text" name="name"/>
                                    <div class="error_txt inactive" id="error_name">Please provide your name.</div>
                                </label>
                            </Col>

                            <Col size="md-6">
                                <label>Email
                                    <input type="text" name="email"/>
                                    <div class="error_txt inactive" id="error_email">Please provide your email.</div>
                                </label>
                            </Col>
                        </Row>
                        <Row>
                            
                                <button type="button" align="center" class="btn btn-primary">Submit</button>
                            
                        </Row>
                           </Container>
                  
            </div>
               
          )
    }
};

export default App;






