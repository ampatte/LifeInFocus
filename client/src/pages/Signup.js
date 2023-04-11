import { NavLink } from "react-router-dom";
import Grid from "@mui/material/Unstable_Grid2"; 
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Signup() {
  return (
    <div className="signup-page-container">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2} direction="column">
            <Grid item lrg={12}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <h1>Create an Account</h1>
                <form>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Username"
                    type="text"
                    name="username"
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Email"
                    type="email"
                    name="email"
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Password"
                    type="password"
                    name="password"
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Confirm Password"
                    type="password"
                    name="confirmPassword"
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                  >
                    Sign Up
                  </Button>
                </form>
                <h3>Already have an account?</h3>
                <NavLink className="button" to="/login">
                  Login
                </NavLink>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Signup;