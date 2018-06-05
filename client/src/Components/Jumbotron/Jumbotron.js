// import React from "react";
// import "./Jumbotron.css";

// const Jumbotron = () => (
//   <div className="jumbotron text-center">


//         <h1>Welcome to Researcher</h1>
//             <h4>A place where you can add your research to one place and share with the world. </h4>
//   </div>
// );

// export default Jumbotron;


import React from "react";
import "./Jumbotron.css";

const Jumbotron = ({ children }) => (
  <div className="jumbotron mt-2">
    {children}
  </div>
);

export default Jumbotron;