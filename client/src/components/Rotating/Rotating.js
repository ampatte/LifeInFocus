import "./Rotating.css";
import Grid from "@mui/material/Unstable_Grid2"; // Grid version 2
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

import quotes from "../../data/quotes.json";

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
          <h2>Motivational Quote of the Day</h2>
          <div classname="quote-wrapper"></div>
          {/*Loop through the quotes.json and render each quote dynamically*/}
          {quotes.map((quote) => {
            return <div key={quote.id}>{quote.text}</div>;
          })}
        </Paper>
      </Grid>
    </Grid>
  );
}
export default Rotating;
