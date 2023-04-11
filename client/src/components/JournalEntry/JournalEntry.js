import './JournalEntry.css';
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import TextField from '@mui/material/TextField';
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    //height: 60,
    lineHeight: "60px",
  }));

function JournalEntry() {
    return (
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
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