import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import Footer from "../../Components/Footer";
import { Container, Row, Col } from "../../Components/Grid";
import Nav from "../../Components/Nav";

class Signup extends Component {
    render() {
        return (
            <div>
                <Nav/>
                <Jumbotron>
                    <h1>Sign-up</h1>
                </Jumbotron>
                <Footer/>
                <Container>

 <form>
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
                                      <Col size="md-6">
                                <label>Username
                                    <input type="text" name="username" required/>
                                    <div class="error_txt inactive" id="error_username" >Please provide your username.</div>
                                </label>
                            </Col>
                                      <Col size="md-6">
                                <label>Password
                                    <input type="password"  required/>
                                    <div class="error_txt inactive" id="error_password" >Please provide your Password.</div>
                                </label>
                            </Col>
</Row>
  {/* <div class="form-group">
    <label for="exampleInputPassword1">Password:</label>
        <div>
            <input type="password"  placeholder="Password" required></input>
        </div>
  </div> */}
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
            {/* <form>
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
                                      <Col size="md-6">
                                <label>Username
                                    <input type="text" name="username" required/>
                                    <div class="error_txt inactive" id="error_username" >Please provide your username.</div>
                                </label>
                            </Col>
                                      <Col size="md-6">
                                <label>
                                    <input type="password"  required/>
                                </label>
                            </Col>
                                <button type="button"  class="btn btn-warning">Submit</button>
                          
                        </Row> */}
                {/* </form>     */}
                           </Container>
                
                  
            </div>
               
          )
    }
};

export default Signup;






