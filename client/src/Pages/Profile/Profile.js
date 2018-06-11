import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import Footer from "../../Components/Footer";
import { Container } from "../../Components/Grid";
import Nav from "../../Components/Nav";
import Card from "../../Components/Card"

class Profile extends Component {
    render() {
        return (
            <div>

                 <Nav/>    
        <Jumbotron>
            <h1><strong>Your profile</strong></h1>
        </Jumbotron>

        <Container>
            <Card  title="hello">
                
            </Card>

   

        </Container>   


       
            <Footer/>
    </div>

      )
    }
};

// class App extends Component {
//   render() {
//     return (
//       <div>
//     <Container>
//              <Nav/>
//     </Container> 
//         <Jumbotron>
        
//          <h1 className="text-center">
//                 <strong>Researcher</strong>
//             </h1>
//               <h2 className="text-center">
                   
//               </h2>
          
//         </Jumbotron>

//          <h1>my profile</h1>
            
//             <Container>
//             </Container>

//                 <Footer/>
       
          
                          
//       </div>
      
//     );
//   }
// }
export default Profile;