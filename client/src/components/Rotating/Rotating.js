import "./Rotating.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  //height: "100vh",
  lineHeight: "60px",
}));

function Rotating() {
  return (
    <Grid container spacing={2}>
    <Grid item xs={12} sm={12}>
      <Paper elevation={10} sx={{ padding: 2 }}>
        <h2>mememe of the Day</h2>
        <p>
          akjdajdwbkjdbjwd adwjkadb wad jadkjwdbahd ahd hawdba da dahdwhdkjba
          dakhbd
        </p>
      </Paper>
    </Grid>
  </Grid>
  );
}
export default Rotating;
