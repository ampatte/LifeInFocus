//imports from react
import { NavLink } from "react-router-dom";
import { useState } from "react";

import Auth from "../utils/auth"

//imports from material ui
import Grid from "@mui/material/Unstable_Grid2"; 
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { ADD_USER } from "../utils/mutations";

import {useMutation}  from '@apollo/client';


function Signup() {

  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [addUser, {error}] = useMutation(ADD_USER);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
  
    try{
      const {data} = await addUser({
        
        variables: { ...formState }
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="signup-page-container">
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Grid container spacing={2} direction="column">
            <Grid item lrg={12}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <h1>Create an Account</h1>
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Username"
                    type="text"
                    name="username"
                    value={formState.username}
                    onChange={handleChange}
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Email"
                    type="email"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
              
                  />
                  <TextField
                    fullWidth
                    margin="normal"
                    label="Password"
                    type="password"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                  />
                 {/* // <TextField
                  //   fullWidth
                  //   margin="normal"
                  //   label="Confirm Password"
                  //   type="password"
                  //   name="confirmPassword"
                  //   value={formState.confirmPassword}
                  //   onChange={handleChange}
             
  // />*/}
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    sx={{ mt: 2 }}
                  >
                    Sign Up
                  </Button>
                </form>
                {error && <div>Signup failed! Please try again.</div>}
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