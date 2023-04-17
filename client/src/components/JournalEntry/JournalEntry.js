import React, { useState } from 'react'
import './JournalEntry.css';
import "../../global-styles/global.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import TextField from '@mui/material/TextField';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import  Button from "@mui/material/Button";
import  ButtonGroup from "@mui/material/ButtonGroup";
import { ADD_JOURNALENTRY } from '../../utils/mutations';
import Auth from '../../utils/auth';

function JournalEntry() {

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    //height: 60,
    lineHeight: "60px",
  }));
  const handleSubmit = async (event) => {
    event.preventDefault();
  
    try {
      await addJournalEntry({
        variables: { journalText }
      });
      setJournalText("");
    } catch (err) {
      console.error(err);
    }
  };
 
  
  
  
  
  
  

    return (
        <Grid className="box" container spacing={2}>
        <Grid  item xs={12} sm={12}>
            <Paper elevation={10} sx={{ padding: 2 }}>
              <h2>Add an entry!</h2>
              <TextField
                fullWidth
                sx={{
                  minWidth: '80%',
                }}
              />
            </Paper>
          
        </Grid>
      </Grid>
    );
    }
    export default JournalEntry;