import React, { useState } from "react";
import { Box, Typography, Button, Paper, LinearProgress } from "@mui/material";
import { styled } from "@mui/material/styles";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import QHeader from "../../components/QHeader";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel"; // Import the Cancel icon for incorrect answers

const CustomButton = styled(Button)(({ theme, selected, isCorrect }) => ({
  margin: theme.spacing(1),
  borderRadius: "15px",
  textTransform: "none",
  padding: theme.spacing(6),
  fontSize: "18px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: selected ? (isCorrect ? "#DAF6D0" : "#FF7D7D") : "#fff",
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
  borderColor: selected ? (isCorrect ? "#C3E6CB" : "#FF7D7D") : "#ddd",
  color: selected ? (isCorrect ? "#155724" : "#721c24") : "#4B23B6",
  position: "relative",
  width: "100%", // Ensure full width
  height: "auto",
}));

const NumberBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#6C7CF7",
  borderRadius: "12px",
  padding: theme.spacing(0.5, 1),
  color: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontWeight: "bold",
  position: "absolute",
  top: "-15px", // Adjusted to move it a little higher
  right: "-15px", // Adjusted to move it to the right
  width: "40px",
  height: "40px",
  fontSize: "16px",
  zIndex: 2,
}));

const QuestionBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#3f51b5",
  borderRadius: "15px",
  padding: theme.spacing(6),
  textAlign: "center",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const IndicatorBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#FFB100",
  padding: theme.spacing(1, 2),
  borderRadius: "12px",
  color: "#FFC619",
  fontWeight: "bold",
  marginRight: theme.spacing(2),
  position: "relative",
  overflow: "hidden",
  border: "2px solid #FFC619",
  height: "40px",
  width: "150px",
  "&:after": {
    content: '""',
    position: "absolute",
    top: 0,
    right: 0,
    width: "50%",
    height: "100%",
    backgroundColor: "#FFF",
    zIndex: 1,
  },
  "& svg": {
    zIndex: 2,
    color: "#FFC619",
  },
  "& p": {
    zIndex: 2,
    color: "#FFC619",
  },
  justifyContent: "flex-end",
}));

const StatusBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: "#E0E7FF",
  padding: theme.spacing(1, 2),
  borderRadius: "12px",
  color: "#1E1773",
  fontWeight: "bold",
  height: "40px",
}));

const CorrectAnswerNotification = styled(Box)(({ theme }) => ({
  backgroundColor: "#DAF6D0",
  color: "#155724",
  borderRadius: "12px",
  padding: theme.spacing(1),
  display: "flex",
  flexDirection: "column", // To stack text and score vertically
  alignItems: "center",
  justifyContent: "center",
  position: "absolute", // To position it outside the white box
  top: "80%",
  right: theme.spacing(2),
  transform: "translateY(-50%)",
  zIndex: 1000, // Ensure it appears above other content
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
}));

const IncorrectAnswerNotification = styled(Box)(({ theme }) => ({
  backgroundColor: "#FF7D7D",
  color: "#721c24",
  borderRadius: "12px",
  padding: theme.spacing(1),
  display: "flex",
  flexDirection: "column", // To stack text and score vertically
  alignItems: "center",
  justifyContent: "center",
  position: "absolute", // To position it outside the white box
  top: "80%",
  right: theme.spacing(2),
  transform: "translateY(-50%)",
  zIndex: 1000, // Ensure it appears above other content
  boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
}));

const ProgressContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: theme.spacing(2),
}));

const ProgressBar = styled(LinearProgress)(({ theme }) => ({
  flexGrow: 1,
  height: "10px",
  borderRadius: "5px",
  backgroundColor: "#e0e0e0",
  "& .MuiLinearProgress-bar": {
    borderRadius: "5px",
    backgroundColor: "#76c7c0",
  },
}));

const CompQ = () => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isCorrectAnswerClicked, setIsCorrectAnswerClicked] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showIncorrectNotification, setShowIncorrectNotification] =
    useState(false);
  const [progress, setProgress] = useState(40); // Example progress

  const handleAnswerClick = (value) => {
    const correctAnswer = "D";
    setSelectedAnswer(value);
    if (value === correctAnswer) {
      setIsCorrectAnswerClicked(true);
      setShowNotification(true);
      setTimeout(() => {
        setShowNotification(false);
      }, 3000); // Hide notification after 3 seconds
    } else {
      setIsCorrectAnswerClicked(false);
      setShowIncorrectNotification(true);
      setTimeout(() => {
        setShowIncorrectNotification(false);
      }, 3000); // Hide notification after 3 seconds
    }
  };

  const handleClose = () => {
    console.log("Close button clicked");
  };

  const renderOptionLabel = (label, value) => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        position: "relative",
      }}
    >
      <NumberBox>{label}</NumberBox>
      <Typography
        variant="h5"
        sx={{
          color: selectedAnswer === value ? "#4B23B6" : "#4B23B6",
          flexGrow: 1,
          textAlign: "center",
        }}
      >
        {value === "A"
          ? "A loop structure"
          : value === "B"
          ? "A type of variable"
          : value === "C"
          ? "A method in a class"
          : "An entity in the real world"}
      </Typography>
    </Box>
  );

  const answers = [
    { label: "1", value: "A" },
    { label: "2", value: "B" },
    { label: "3", value: "C" },
    { label: "4", value: "D" },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        padding: 9,
        position: "relative",
      }}
    >
      <QHeader
        title="Chapter 7: "
        subtitle="Multidimensional Arrays"
        handleClose={handleClose}
      />

      <Paper
        sx={{
          maxWidth: 800,
          mx: "auto",
          p: 4,
          borderRadius: "16px",
          backgroundColor: "#f7f7f7",
          mt: 4,
        }}
      >
        {" "}
        <ProgressContainer>
          <CancelIcon sx={{ color: "#c0c0c0", marginRight: 1 }} />
          <LinearProgress
            variant="determinate"
            value={40}
            sx={{
              flexGrow: 1,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#E0E0E0",
              mr: 2,
            }}
            color="success"
          />{" "}
          <Typography variant="body2" sx={{ color: "#c0c0c0", marginLeft: 1 }}>
            2/5
          </Typography>
        </ProgressContainer>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IndicatorBox>
              <Box sx={{ display: "flex", alignItems: "center", zIndex: 2 }}>
                <WhatshotIcon sx={{ mr: 1 }} />
                <Typography variant="body1" sx={{ fontSize: "15px" }}>
                  1
                </Typography>
              </Box>
            </IndicatorBox>
            <StatusBox>
              <Typography variant="body1" sx={{ fontSize: "15px" }}>
                1/3
              </Typography>
            </StatusBox>
          </Box>
          <StatusBox>
            <img
              src="../../assets/cup.png"
              alt="Cup"
              style={{ width: "24px", height: "24px", marginRight: "8px" }}
            />
            <Typography
              variant="body1"
              sx={{
                fontSize: "15px",
                color: "#1E1773",
                fontWeight: "bold",
              }}
            >
              1st
            </Typography>
          </StatusBox>
        </Box>
        <QuestionBox sx={{ mt: 2 }}>
          <Typography
            variant="h5"
            component="div"
            sx={{ fontWeight: "bold", color: "#ffffff" }}
          >
            What does an object represent in object oriented programming?
          </Typography>
        </QuestionBox>
        <Box
          sx={{
            mt: 4,
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 2,
          }}
        >
          {answers.map((answer, index) => (
            <CustomButton
              key={index}
              onClick={() => handleAnswerClick(answer.value)}
              selected={
                isCorrectAnswerClicked
                  ? selectedAnswer === answer.value
                  : selectedAnswer && selectedAnswer === answer.value
              }
              isCorrect={answer.value === "D"}
              disabled={selectedAnswer !== null}
            >
              {renderOptionLabel(answer.label, answer.value)}
            </CustomButton>
          ))}
        </Box>
      </Paper>

      {showNotification && (
        <CorrectAnswerNotification>
          <Typography variant="h6">Correct answer!</Typography>
          <Typography variant="h4">+600</Typography>
          <CheckCircleIcon sx={{ fontSize: 40 }} />
        </CorrectAnswerNotification>
      )}

      {showIncorrectNotification && (
        <IncorrectAnswerNotification>
          <Typography variant="h6">Wrong answer!</Typography>
          <Typography variant="h4">-600</Typography>
          <CancelIcon sx={{ fontSize: 40 }} />
        </IncorrectAnswerNotification>
      )}
    </Box>
  );
};

export default CompQ;
