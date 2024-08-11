'use client';

import React from 'react';
import { Button, Container, Typography, Box, useTheme, useMediaQuery } from '@mui/material';

const WelcomePage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const styles = {
    pageContainer: {
      backgroundImage: 'url(/images/welcomebg.avif)',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundPosition: 'center',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', 
      minHeight: '100vh',
      position: 'relative',
      overflow: 'hidden',
    },
    summaryContainer: {
      zIndex: 3,
      padding: isSmallScreen ? '20px' : '40px',
      borderRadius: '15px',
      textAlign: 'center',
      width: isSmallScreen ? '90%' : '40%',
      maxWidth: '800px', 
      Height:'500px',     
      position: 'relative',
      right: isSmallScreen ? '0' : '-20%', 
    },
    title: {
      fontWeight: 'bold',
      marginBottom: '20px',
      color: '#ffff',
      fontSize: '40px'
    },
    subtitle: {
      marginBottom: '30px',
      color: '#AEC6CF',
      fontStyle: 'italic'
    },
    buttonContainer: {
      display: 'flex',
      flexDirection: isSmallScreen ? 'column' : 'row',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '20px',
    },
  };

  return (
    <div className="no-background" style={styles.pageContainer}>
      <Container style={styles.summaryContainer}>
        <Typography variant="h4" style={styles.title} gutterBottom>
          Welcome To NutriBot
        </Typography>
        <Typography variant="h6" style={styles.subtitle} gutterBottom>
          Your Personal AI Nutrition Assistant
        </Typography>
        <Box style={styles.buttonContainer}>
          <Button
            variant="contained"
            href="/signin"
            sx={{
              padding: isSmallScreen ? '10px 20px' : '15px 30px',
              fontSize: isSmallScreen ? '16px' : '18px',
              backgroundColor: '#ffff',
              color: '#000000',
              borderRadius: '30px',
              textTransform: 'none',
              transition: 'background-color 0.3s ease, transform 0.3s ease',
              '&:hover': {
                backgroundColor: '#AEC6CF',
              },
            }}
          >
            Sign In
          </Button>
          <Button
            variant="contained"
            href="/signup"
            sx={{
              padding: isSmallScreen ? '10px 20px' : '15px 30px',
              fontSize: isSmallScreen ? '16px' : '18px',
              backgroundColor: '#ffff',
              color: '#000000',
              borderRadius: '30px',
              textTransform: 'none',
              transition: 'background-color 0.3s ease, transform 0.3s ease',
              '&:hover': {
                backgroundColor: '#AEC6CF',
              },
            }}
          >
            Sign Up
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default WelcomePage;
