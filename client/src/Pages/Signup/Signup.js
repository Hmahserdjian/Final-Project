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
                <Jumbotron>
                    <h6> its all in your head</h6>
                    hello
                </Jumbotron>
                <Footer/>
                <Container>

 {/* <form>
  <div class="form-group">
    <label for="Username">Username:</label>
    <div>
        <input type="text" placeholder="Username" required></input>
    </div>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password:</label>
        <div>
            <input type="password"  placeholder="Password" required></input>
        </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> */}
                       <Row>
                            < Col size = "md-6" >
                                <label>Name
                                    <input type="text" name="name" required/>
                                    <div class="error_txt inactive" id="error_name">Please provide your name.</div>
                                </label>
                            </Col>

                            <Col size="md-6">
                                <label>Email
                                    <input type="text" name="email" required/>
                                    <div class="error_txt inactive" id="error_email">Please provide your email.</div>
                                </label>
                            </Col>
                            
                                <button type="button"  class="btn btn-warning">Submit</button>
                          
                        </Row>
                    
                           </Container>
                  
            </div>
               
          )
    }
};

export default App;






