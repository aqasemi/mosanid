import React from "react";
import {
  Box,
  Typography,
  Button,
  LinearProgress,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import { useNavigate } from "react-router-dom";
import QHeader from "../../components/QHeader"; // Import the QHeader component
import {question, q_index} from "../../data/mockData"

const PracticeSessionQuestion = () => {
  const [selectedAnswer, setSelectedAnswer] = React.useState("");
  const navigate = useNavigate();

  
  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleClose = () => {
    navigate("/courses");
  };

  const handleCheck = () => {
    if (selectedAnswer !== "") {
      navigate("/QFeedback");
    }
  };

  const renderOptionLabel = (label, value) => (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        variant="h6"
        sx={{
          width: 30,
          height: 30,
          border: `2px solid ${
            selectedAnswer === value ? "#4B23B6" : "#ABABB5"
          }`,
          borderRadius: "50%",
          mr: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: selectedAnswer === value ? "#4B23B6" : "#ABABB5",
          "&:hover": {
            color: selectedAnswer === value ? "#4B23B6" : "#ABABB5",
            borderColor: selectedAnswer === value ? "#4B23B6" : "#ABABB5",
          },
        }}
      >
        {label}
      </Typography>
      <Typography
        variant="h5"
        sx={{ color: selectedAnswer === value ? "#4B23B6" : "#4B23B6" }}
      >
        {question[value]}
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ backgroundColor: "#f0f0f0", minHeight: "100vh",padding:5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#4B23B6",
          color: "white",
          px: 2,
          py: 1,
          width: "100%",
        }}
      >
        <QHeader
          title="Chapter 7: "
          subtitle={question.chapter}
          handleClose={handleClose}
        />
      </Box>

      <Box
        sx={{
          p: 4,
          maxWidth: 800,
          mx: "auto",
          mt: 2,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mb: 4,
          }}
        >
          <LinearProgress
            variant="determinate"
            value={(q_index+1)/5*100}
            sx={{
              flexGrow: 1,
              height: 10,
              borderRadius: 5,
              backgroundColor: "#E0E0E0",
              mr: 2,
            }}
            color="success"
          />
          <Typography variant="body2" sx={{ color: "#9E9E9E", fontSize: 14 }}>
            {q_index+1}/5
          </Typography>
        </Box>

        <Card
          variant="outlined"
          sx={{
            borderRadius: 4,
            mb: 4,
            p: 3,
            boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            backgroundColor: "#ffffff",
          }}
        >
          <CardContent>
            <Typography variant="h4" sx={{ mb: 2, color: "#4B23B6" }}>
              {question.content}
            </Typography>
            <FormControl component="fieldset" sx={{ width: "100%" }}>
              <RadioGroup
                value={selectedAnswer}
                onChange={handleAnswerChange}
                sx={{ display: "flex", flexDirection: "column" }}
              >
                <FormControlLabel
                  value="A"
                  control={
                    <Radio
                      icon={
                        <RadioButtonUncheckedIcon sx={{ display: "none" }} />
                      }
                      checkedIcon={
                        <RadioButtonCheckedIcon sx={{ display: "none" }} />
                      }
                    />
                  }
                  label={renderOptionLabel("A", "A")}
                  sx={{
                    backgroundColor:
                      selectedAnswer === "A" ? "#E8EAF6" : "white",
                    borderRadius: 2,
                    mb: 1,
                    p: 2,
                    border: "1px solid #E0E0E0",
                    color: "#4B23B6",
                    width: "100%",
                    "&:hover": {
                      backgroundColor:
                        selectedAnswer === "A" ? "#E8EAF6" : "white",
                    },
                  }}
                />
                <FormControlLabel
                  value="B"
                  control={
                    <Radio
                      icon={
                        <RadioButtonUncheckedIcon sx={{ display: "none" }} />
                      }
                      checkedIcon={
                        <RadioButtonCheckedIcon sx={{ display: "none" }} />
                      }
                    />
                  }
                  label={renderOptionLabel("B", "B")}
                  sx={{
                    backgroundColor:
                      selectedAnswer === "B" ? "#E8EAF6" : "white",
                    borderRadius: 2,
                    mb: 1,
                    p: 2,
                    border: "1px solid #E0E0E0",
                    color: "#4B23B6",
                    width: "100%",
                    "&:hover": {
                      backgroundColor:
                        selectedAnswer === "B" ? "#E8EAF6" : "white",
                    },
                  }}
                />
                <FormControlLabel
                  value="C"
                  control={
                    <Radio
                      icon={
                        <RadioButtonUncheckedIcon sx={{ display: "none" }} />
                      }
                      checkedIcon={
                        <RadioButtonCheckedIcon sx={{ display: "none" }} />
                      }
                    />
                  }
                  label={renderOptionLabel("C", "C")}
                  sx={{
                    backgroundColor:
                      selectedAnswer === "C" ? "#E8EAF6" : "white",
                    borderRadius: 2,
                    mb: 1,
                    p: 2,
                    border: "1px solid #E0E0E0",
                    color: "#4B23B6",
                    width: "100%",
                    "&:hover": {
                      backgroundColor:
                        selectedAnswer === "C" ? "#E8EAF6" : "white",
                    },
                  }}
                />
                <FormControlLabel
                  value="D"
                  control={
                    <Radio
                      icon={
                        <RadioButtonUncheckedIcon sx={{ display: "none" }} />
                      }
                      checkedIcon={
                        <RadioButtonCheckedIcon sx={{ display: "none" }} />
                      }
                    />
                  }
                  label={renderOptionLabel("D", "D")}
                  sx={{
                    backgroundColor:
                      selectedAnswer === "D" ? "#E8EAF6" : "white",
                    borderRadius: 2,
                    mb: 1,
                    p: 2,
                    border: "1px solid #E0E0E0",
                    color: "#4B23B6",
                    width: "100%",
                    "&:hover": {
                      backgroundColor:
                        selectedAnswer === "D" ? "#E8EAF6" : "white",
                    },
                  }}
                />
              </RadioGroup>
            </FormControl>
          </CardContent>
        </Card>

        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
          <Button
            startIcon={<ArrowBackIcon />}
            sx={{
              textTransform: "none",
              color: "#4B23B6",
              fontSize: "15px",
              "&:hover": { color: "#4B23B6", backgroundColor: "transparent" },
            }}
          >
            Back
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#4B23B6",
              fontSize: "15px",
              "&:hover": { backgroundColor: "#311773" },
              textTransform: "none",
              color: "white",
            }}
            onClick={handleCheck}
          >
            Check
          </Button>
          <Button
            endIcon={<ArrowForwardIcon />}
            sx={{
              textTransform: "none",
              color: "#4B23B6",
              fontSize: "15px",
              "&:hover": { color: "#4B23B6", backgroundColor: "transparent" },
            }}
            // onClick={() => q_index++}
          >
            Next
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default PracticeSessionQuestion;
