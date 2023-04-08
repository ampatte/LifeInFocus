import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Paper from "@mui/material/Paper";

function Page404() {
  return (
    <div className="error-page-container">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2} direction="column">
            <Grid item lrg={12}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <h1>Congrats! You broke the Website!</h1>
                <h2>404 ERROR</h2>
                <h3>We can fix it though, click the button below!</h3>
                <NavLink className="button" to="">
                  Go Home
                </NavLink>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Page404;
