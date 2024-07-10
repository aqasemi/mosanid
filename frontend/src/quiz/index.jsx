import React from "react";
import {
  Box,
  Typography,
  Button,
  ToggleButton,
  ToggleButtonGroup,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  Select,
  MenuItem,
  Checkbox,
  ListItemText,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import QHeader from "../../components/QHeader"; // Import the QHeader component

const CustomButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  borderRadius: "8px",
  textTransform: "none",
  padding: theme.spacing(1, 3),
  "&:hover": {
    backgroundColor: theme.palette.primary.dark,
  },
}));

const PracticeSession = ({ handleClose }) => {
  const [goal, setGoal] = React.useState("quickly");
  const [numQuestions, setNumQuestions] = React.useState(5); // State for number of questions
  const [questionTypes, setQuestionTypes] = React.useState([]); // State for question types
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const handleNumQuestionsChange = (event) => {
    setNumQuestions(event.target.value);
  };

  const handleQuestionTypesChange = (event) => {
    const value = event.target.value;
    setQuestionTypes(typeof value === "string" ? value.split(",") : value);
  };

  const handleStartPractice = () => {
    navigate("/practice-question");
  };

  const questionTypeOptions = ["Multiple Choice", "True/False", "Open Ended"];

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 4,
        bgcolor: colors.primary[400],
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <QHeader
        title="Chapter 7: "
        subtitle="Multidimensional Array Practice"
        handleClose={handleClose}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Typography variant="h6" component="div">
          <strong>Chapter 7: </strong>
          <span style={{ color: "#868dfb " }}>Multidimensional Arrays</span>
        </Typography>
        <Button onClick={handleClose} sx={{ color: "#ffffff" }}>
          <CloseIcon />
        </Button>
      </Box>

      <Typography variant="subtitle1" sx={{ mt: 4, width: "100%" }}>
        Number of Questions
      </Typography>
      <FormControl fullWidth sx={{ mt: 1 }}>
        <Select
          value={numQuestions}
          onChange={handleNumQuestionsChange}
          displayEmpty
          sx={{
            color: "white",
            bgcolor: colors.primary[400],
            "& .MuiSelect-icon": {
              color: "white",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#868dfb",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#fff",
            },
          }}
        >
          <MenuItem value={5}>5</MenuItem>
          <MenuItem value={10}>10</MenuItem>
          <MenuItem value={15}>15</MenuItem>
          <MenuItem value={20}>20</MenuItem>
        </Select>
      </FormControl>

      <Typography variant="subtitle1" sx={{ mt: 4, width: "100%" }}>
        Type of Questions
      </Typography>
      <FormControl fullWidth sx={{ mt: 1 }}>
        <Select
          multiple
          value={questionTypes}
          onChange={handleQuestionTypesChange}
          renderValue={(selected) => selected.join(", ")}
          sx={{
            color: "white",
            bgcolor: colors.primary[400],
            "& .MuiSelect-icon": {
              color: "white",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              borderColor: "#868dfb",
            },
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: "#868dfb",
            },
          }}
        >
          {questionTypeOptions.map((type) => (
            <MenuItem
              key={type}
              value={type}
              sx={{ bgcolor: colors.primary[400], color: "white" }}
            >
              <Checkbox
                checked={questionTypes.indexOf(type) > -1}
                sx={{ color: "white" }} // Color of the checkboxes
              />
              <ListItemText primary={type} sx={{ color: "white" }} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          mt: 4,
        }}
      >
        <CustomButton
          variant="contained"
          sx={{
            backgroundColor: "#2C287E",
            "&:hover": {
              backgroundColor: "#423BA0",
            },
          }}
          onClick={handleStartPractice} // navigate to PracticeSessionQuestion
        >
          Start Practice
        </CustomButton>
      </Box>
    </Box>
  );
};

export default PracticeSession;
