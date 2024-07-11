import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  IconButton,
  Card,
  CardContent,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Modal,
} from "@mui/material";
import QHeader from "../../components/QHeader"; // Import the QHeader component
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import RadioButtonCheckedIcon from "@mui/icons-material/RadioButtonChecked";
import CropFreeIcon from "@mui/icons-material/CropFree";
import { useNavigate } from "react-router-dom";
import {question} from "../../data/mockData"

const Feedback = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleCloseButtonClick = () => {
    navigate("/practice-question");
  };

  const renderOptionLabel = (label, value) => (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        variant="h6"
        sx={{
          width: 30,
          height: 30,
          border: `2px solid ${value === "C" ? "#4B23B6" : "#7B7B85"}`,
          borderRadius: "50%",
          mr: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: value === "C" ? "#4B23B6" : "#7B7B85",
          "&:hover": {
            color: value === "C" ? "#4B23B6" : "#ABABB5",
            borderColor: value === "C" ? "#4B23B6" : "#ABABB5",
          },
        }}
      >
        {label}
      </Typography>
      <Typography
        variant="h5"
        sx={{ color: value === "C" ? "#4B23B6" : "#4B23B6" }}
      >
        {question[value]}
      </Typography>
    </Box>
  );

  return (
    <Box sx={{ backgroundColor: "#f0f0f0", minHeight: "100vh", p: 9 }}>
      <QHeader
        title="Chapter 7: "
        subtitle={question.chapter}
        handleClose={handleCloseButtonClick}
      />
      <Box
        sx={{
          p: 4,
          maxWidth: 1200,
          mx: "auto",
          mt: 2,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Card
            variant="outlined"
            sx={{
              borderRadius: 4,
              mb: 4,
              p: 3,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#ffffff",
              width: "48%",
            }}
          >
            <CardContent>
              <Typography variant="h4" sx={{ mb: 2, color: "#4B23B6" }}>
                {question.content}
              </Typography>
              <FormControl component="fieldset" sx={{ width: "100%" }}>
                <RadioGroup
                  value="C" // Always "C"
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
                      backgroundColor: "#E8EAF6",
                      borderRadius: 2,
                      mb: 1,
                      p: 2,
                      border: "1px solid #E0E0E0",
                      color: "#4B23B6",
                      width: "100%",
                      pointerEvents: "none", // Make unclickable
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
                      backgroundColor: "#E8EAF6",
                      borderRadius: 2,
                      mb: 1,
                      p: 2,
                      border: "1px solid #E0E0E0",
                      color: "#4B23B6",
                      width: "100%",
                      pointerEvents: "none", // Make unclickable
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
                      backgroundColor: "#FF7D7D",
                      borderRadius: 2,
                      mb: 1,
                      p: 2,
                      border: "1px solid #E0E0E0",
                      color: "#4B23B6",
                      width: "100%",
                      pointerEvents: "none", // Make unclickable
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
                      backgroundColor: "#96C698",
                      borderRadius: 2,
                      mb: 1,
                      p: 2,
                      border: "1px solid #E0E0E0",
                      color: "#4B23B6",
                      width: "100%",
                      pointerEvents: "none", // Make unclickable
                    }}
                  />
                </RadioGroup>
              </FormControl>
            </CardContent>
          </Card>

          <Card
            variant="outlined"
            sx={{
              borderRadius: 4,
              mb: 4,
              p: 3,
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#ffffff",
              width: "48%",
            }}
          >
            <CardContent sx={{ position: "relative" }}>
              <Typography
                variant="h5"
                sx={{ mb: 2, color: "#4B23B6", fontWeight: "bold" }}
              >
                Explanation
                <IconButton
                  onClick={handleOpen}
                  sx={{
                    color: "#4B23B6",
                    position: "absolute",
                    right: 0,
                    top: 0,
                  }}
                >
                  <CropFreeIcon sx={{ fontSize: 30 }} />
                </IconButton>
              </Typography>
              <Box
                sx={{
                  backgroundColor: "#f0f0f0",
                  p: 2,
                  borderRadius: 2,
                  overflow: "auto",
                  whiteSpace: "pre-wrap",
                  maxHeight: 300, // Limit height for scrolling
                }}
              >
                <Typography variant="h5" sx={{ mb: 2, color: "#4B23B6" }}>
                  In a two-dimensional array, summing elements by column
                  involves iterating through each column and summing the
                  elements of that column.
                </Typography>
                <Typography variant="h5" sx={{ mb: 2, color: "#4B23B6" }}>
                  Here is a Java example that demonstrates how to sum the
                  elements of each column in a two-dimensional array:
                </Typography>
                <Typography variant="h5" sx={{ color: "#4B23B6" }}>
                  {`public class ColumnSum {
  public static void main(String[] args) {
    int[][] array = {
      {1, 2, 3},
      {4, 5, 6},
      {7, 8, 9}
    };
    
    for (int col = 0; col < array[0].length; col++) {
      int sum = 0;
      for (int row = 0; row < array.length; row++) {
        sum += array[row][col];
      }
      System.out.println("Sum of column " + col + ": " + sum);
    }
  }
}`}
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Box>

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
            endIcon={<ArrowForwardIcon />}
            sx={{
              textTransform: "none",
              color: "#4B23B6",
              fontSize: "15px",
              "&:hover": { color: "#4B23B6", backgroundColor: "transparent" },
            }}
          >
            Next
          </Button>
        </Box>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "white",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
            maxWidth: "80%",
            maxHeight: "80%",
            overflow: "auto",
          }}
        >
          <Typography
            variant="h5"
            sx={{ mb: 2, color: "#4B23B6", fontWeight: "bold" }}
          >
            Explanation
          </Typography>
          <Typography
            id="modal-description"
            variant="h5"
            sx={{ color: "#4B23B6", mb: 2 }}
          >
            In a two-dimensional array, summing elements by column involves
            iterating through each column and summing the elements of that
            column.
          </Typography>
          <Typography variant="h5" sx={{ color: "#4B23B6", mb: 2 }}>
            Here is a Java example that demonstrates how to sum the elements of
            each column in a two-dimensional array:
          </Typography>
          <Box
            sx={{
              p: 2,
              borderRadius: 2,
              overflow: "auto",
              whiteSpace: "pre-wrap",
            }}
          >
            <Typography variant="h5" sx={{ color: "#4B23B6" }}>
              {question.explanation}
            </Typography>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
};

export default Feedback;
