//imports from react
import { NavLink } from "react-router-dom";
import { useState } from "react";

import Auth from "../utils/auth"

//imports from material ui
import Grid from "@mui/material/Unstable_Grid2"; 
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

import { LOGIN } from "../utils/mutations";

import {useMutation}  from '@apollo/client';

function LoginPage() {

  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [login, {error}] = useMutation(LOGIN);

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
    const data = await login({
      variables : { ...formState }
    });
    console.log(data);
      Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
    }

    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <div className="login-page-container">
      <Grid container spacing={2} justifyContent="center">
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <TextField
                label="Email Address"
                type="email"
                fullWidth
                required
                margin="normal"
                value={formState.email}
                onChange={handleChange}
              />
              <TextField
                label="Password"
                type="password"
                fullWidth
                required
                margin="normal"
                value={formState.password}
                onChange={handleChange}
              />
              <Button type="submit" variant="contained" color="primary">
                Sign In
              </Button>
            </form>
            {error && <div>Login failed! Please try again.</div>}
            <p>
              Don't have an account?{" "}
              <NavLink to="/signup">Sign up here</NavLink>
            </p>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default LoginPage;