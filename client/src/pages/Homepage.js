import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2

import JournalEntry from "../components/JournalEntry/JournalEntry";
import LastEntry from "../components/LastEntry/LastEntry";
import Rotating from "../components/Rotating/Rotating";


function Homepage() {
  return (
    <div className="home-container">
      <h1>We did it!</h1>
      <h2>More info!</h2>
      
      
      <Grid container rowSpacing={10} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid xs={6}> <JournalEntry/> </Grid>
        <Grid xs={6}> <LastEntry/> </Grid>
        <Grid xs={6}> <Rotating/></Grid>
        <Grid xs={6}></Grid>
      </Grid>
      <p>Even more</p>

      <NavLink className="button" to="entries">
        My projects
      </NavLink>
    </div>
  );
}

export default Homepage;

// <div className="container">
//       <div className="card" style={cardStyle}>
//         <img
//           className="card-img-top"
//           src={`http://placecorgi.com/${randomWidth()}`}
//           alt="Card cap"
//         />
//         <div className="card-body">
//         <h5 className="card-title">Name: {props.name}</h5>
//           <p className="card-text">Description: {props.description}</p>
//           <p className="card-text">ID: {props.id}</p>
//           <a href="#" className="btn btn-primary">
//             Adopt {props.name}
//           </a>
//         </div>
