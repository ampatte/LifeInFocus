import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Paper from "@mui/material/Paper";

import JournalEntry from "../components/JournalEntry/JournalEntry";
import LastEntry from "../components/LastEntry/LastEntry";
import Rotating from "../components/Rotating/Rotating";


function Homepage() {
  return (
    <div className="home-container">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2} direction="column">
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <JournalEntry />
              </Paper>
            </Grid>
            <Grid item xs={12}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Rotating />
              </Paper>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2, height: '100%' }}>
            <LastEntry />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Homepage;

