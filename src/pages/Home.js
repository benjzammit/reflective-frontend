import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Typography, Button } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Welcome to Reflective
      </Typography>
      <Button variant="contained" color="primary" component={Link} to="/questionnaire">
        Get Started
      </Button>
    </Container>
  );
};

export default Home;
