import "./LastEntry.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
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

function LastEntry() {
  return (
    <Grid container spacing={2}>
      <Item elevation={10}>
        <h2>last journal entry</h2>
        <p>
          akjdajdwbkjdbjwd adwjkadb wad jadkjwdbahd ahd hawdba da dahdwhdkjba
          dakhbd
        </p>
      </Item>
    </Grid>
  );
}
export default LastEntry;
