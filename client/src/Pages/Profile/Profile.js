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
    //     List.research()
    //         .then(res =>
    //             this.setState({
    //                 researcher: res.data
    //             })
    //         )
    //         .catch(err => console.log(err));
    // };

    // researcher= id => {
    //     List.research(id).then(res => this.researcher());
    // }
    

    render() {
        return (
            <div>

                 <Nav/>    
        <Jumbotron>
            <h1><strong>Your profile</strong></h1>
        </Jumbotron>
<Container>
  

<Card title="New Research">
    <label for="title">Research title</label>
    <input type="text"/>


    <label for="research">My research</label>
    <textarea  name="subject" placeholder="Write something.." ></textarea>

    
    <button type="button" class="btn btn-large btn-info">submit</button>
       
        
</Card>

</Container>
        <Container>
            <Card title="Research">
              {this.state.researcher.length ? (
                <List>
                  {this.state.researcher.map(researcher => (
                    <researcher
                      _id={researcher._id}
                      cardTilte={researcher.title}
                      cardBody= {researcher.body}
                      date= {researcher.date} 
                      handleClick={this.handleResearchPost}
                      saved 
                    />
                  ))}
                </List>
              ) : (
                <h2 className="text-center">No research submitted.</h2>
              )}
            </Card>
            <button type="submit" class="btn btn-primary">Submit</button>
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