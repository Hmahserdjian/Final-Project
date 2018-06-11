import React, { Component } from "react";
import Jumbotron from "../../Components/Jumbotron";
import Footer from "../../Components/Footer";
import { Container } from "../../Components/Grid";
import Nav from "../../Components/Nav";
import Card from "../../Components/Card";
import List from "../../Components/List";


class Profile extends Component {
    state = {
        researcher: []
    };

    // componentDidMount() {
    //     this.researcher();
    // }

    // researcher = () => {
    //     API.research()
    //         .then(res =>
    //             this.setState({
    //                 researcher: res.data
    //             })
    //         )
    //         .catch(err => console.log(err));
    // };

    // researcher= id => {
    //     API.research(id).then(res => this.researcher());
    // }
    

    render() {
        return (
            <div>

                 <Nav/>    
        <Jumbotron>
            <h1><strong>Your profile</strong></h1>
        </Jumbotron>

        <Container>
            <Card title="research" icon="download">
              {this.state.researcher.length ? (
                <List>
                  {this.state.researcher.map(researcher => (
                    <researcher
                      _id={researcher._id}
                      cardTilte={researcher.title}
                      cardBody= {researcher.body}
                      date= {researcher.date}  
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No research submitted.</h2>
              )}
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