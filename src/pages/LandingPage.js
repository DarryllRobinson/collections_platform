import React from "react";
import { Box, Typography, Button, Grid, Paper, Container } from "@mui/material";

const LandingPage = () => {
  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          py: 8,
          textAlign: "center",
        }}
      >
        <Typography variant="h1" gutterBottom>
          Welcome to Collections Platform
        </Typography>
        <Typography variant="h2" gutterBottom>
          Simplify your business collections with ease
        </Typography>
        <Button variant="contained" color="secondary" size="large">
          Get Started
        </Button>
      </Box>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h2" textAlign="center" gutterBottom>
          Features
        </Typography>
        <Grid container spacing={4}>
          {[1, 2, 3].map((feature) => (
            <Grid item xs={12} sm={6} md={4} key={feature}>
              <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
                <Typography variant="h5" gutterBottom>
                  Feature {feature}
                </Typography>
                <Typography>
                  Placeholder description for feature {feature}.
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ backgroundColor: "background.default", py: 8 }}>
        <Container>
          <Typography variant="h2" textAlign="center" gutterBottom>
            Testimonials
          </Typography>
          <Grid container spacing={4}>
            {[1, 2, 3].map((testimonial) => (
              <Grid item xs={12} sm={6} md={4} key={testimonial}>
                <Paper elevation={3} sx={{ p: 4 }}>
                  <Typography variant="body1">
                    "Placeholder testimonial {testimonial} from a happy
                    customer."
                  </Typography>
                  <Typography variant="subtitle1" textAlign="right">
                    - Customer {testimonial}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Pricing Section */}
      <Container sx={{ py: 8 }}>
        <Typography variant="h2" textAlign="center" gutterBottom>
          Pricing
        </Typography>
        <Grid container spacing={4}>
          {[1, 2, 3].map((plan) => (
            <Grid item xs={12} sm={6} md={4} key={plan}>
              <Paper elevation={3} sx={{ p: 4, textAlign: "center" }}>
                <Typography variant="h5" gutterBottom>
                  Plan {plan}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  $XX/month
                </Typography>
                <Typography>
                  Placeholder description for pricing plan {plan}.
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }}>
                  Choose Plan
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          py: 4,
          textAlign: "center",
        }}
      >
        <Typography variant="body1">
          © {new Date().getFullYear()} Collections Platform. All rights
          reserved.
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;
