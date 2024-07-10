import React from "react";
import {
  Box,
  Typography,
  LinearProgress,
} from "@mui/material";
import QHeader from '../../components/QHeader'; // Import the QHeader component

const SessionComplete = () => {
  const handleClose = () => {
    console.log('Close button clicked');
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        minHeight: "100vh",
      }}
    >
      <QHeader
        title="Chapter 7: "
        subtitle="Multidimensional Array Practice"
        handleClose={handleClose}
      />
      <Box
        sx={{
          p: 4,
          maxWidth: 500,
          mx: "auto",
          mt: 10, // Margin to avoid overlap with the fixed header
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
          width: "90%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 2,
          }}
        >
          <LinearProgress
            variant="determinate"
            value={100}
            sx={{
              flexGrow: 1,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#E0E0E0",
              mr: 2,
            }}
            color="success"
          />
          <Typography variant="body2" sx={{ color: "#9E9E9E" }}>
            5/5
          </Typography>
        </Box>
        <Box sx={{ mb: 4 }}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: 100,
              height: 100,
              borderRadius: "50%",
              backgroundColor: "#96C698",
              mb: 2,
            }}
          >
            <Typography variant="h1" sx={{ color: "white" }}>
              ✓
            </Typography>
          </Box>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 1, color: "#423BA0" }}>
            Session is Complete
          </Typography>
          <Typography variant="body1" sx={{ color: "#4B23B6" }}>
            Your final score is 3/5 (60%)
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SessionComplete;