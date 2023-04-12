import React, { useState, useEffect } from "react";
import quotes from "./Quotes";
import { Box, Typography, Button, Paper, Grid, Container, styled } from "@mui/material";

const StyledPaper = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: "center",
  color: theme.palette.text.secondary,
  //height: 60,
  lineHeight: "60px",
}));

const Rotating = () => {
  const [quoteIndex, setQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length);
    }, 5000); // Change interval time as needed (currently 5 seconds)

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Container maxWidth="sm">
      <Box minHeight="30vh" display="flex" alignItems="center">
        <Grid container spacing={2} direction="column">
          <Grid item xs={12}>
            <Typography variant="h7" component="div" gutterBottom>
             <h2>Motivational Quotes</h2> 
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <StyledPaper>
              <Typography variant="h5" align="center">
                {quotes[quoteIndex].text}
              </Typography>
            </StyledPaper>
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                setQuoteIndex((prevIndex) => (prevIndex + 1) % quotes.length)
              }
            >
              Next Quote
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Rotating;