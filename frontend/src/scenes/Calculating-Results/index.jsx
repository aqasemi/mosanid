import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import QHeader from "../../components/QHeader";

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: "#f0f0f0",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(4),
}));

const AllDoneText = styled(Typography)(({ theme }) => ({
  color: "#3f51b5",
  fontWeight: "bold",
  marginBottom: theme.spacing(1),
}));

const CalculatingText = styled(Typography)(({ theme }) => ({
  color: "#574edb",
}));

const CalculatingResults = () => {
  const handleClose = () => {
    console.log("Close button clicked");
  };

  return (
    <Container>
      <QHeader
        title="Chapter 7: Multidimensional Array Practice"
        subtitle=""
        handleClose={handleClose}
      />
      <AllDoneText variant="h2">All Done!</AllDoneText>
      <CalculatingText variant="h4">Calculating the results...</CalculatingText>
    </Container>
  );
};

export default CalculatingResults;
