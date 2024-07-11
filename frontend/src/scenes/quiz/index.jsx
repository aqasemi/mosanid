import React from "react";
import axios from "axios";
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
} from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import QHeader from '../../components/QHeader'; // Import the QHeader component

const CustomButton = styled(Button)(({ theme }) => ({
  margin: theme.spacing(1),
  borderRadius: "8px",
  textTransform: "none",
  padding: theme.spacing(1, 3),
  "&:hover": {
    backgroundColor: "theme.palette.primary.dark",
  },
}));

const PracticeSession = ({ handleClose, SessionData={} }) => {
  const [goal, setGoal] = React.useState("quickly");
  const [data, setData] = React.useState([]);
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  React.useEffect(() => {
    const url = window.location.origin;
    axios.get(url+'/get_quizzes')
      .then(response => setData(response.data))
      .catch(error => {console.log(error)});
      console.log(data)
  }, []);

  const handleGoalChange = (event, newGoal) => {
    setGoal(newGoal);
  };

  const handleStartPractice = () => {
    navigate("/practice-question");
  };

  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: "auto",
        p: 4,
        bgcolor: colors.primary[400],
      }}
    ><QHeader
    title={SessionData.chapter || "Chapter 7: "}
    subtitle={SessionData.topic || "Multidimensional Array Practice"}
    handleClose={handleClose}
  />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
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
      <Typography variant="h4" component="div" sx={{ mt: 2 }}>
        How would you like to practice?
      </Typography>

      <Typography variant="subtitle1" sx={{ mt: 4 }}>
        What’s your goal of this session?
      </Typography>
      <ToggleButtonGroup
        value={goal}
        exclusive
        onChange={handleGoalChange}
        sx={{ mt: 1 }}
      >
        <ToggleButton
          value="quickly"
          sx={{
            textTransform: "none",
            "&.Mui-selected": {
              color: "white",
              backgroundColor: "#423BA0",
              "&:hover": {
                backgroundColor: "#2C287E",
              },
            },
          }}
        >
          <AccessTimeIcon sx={{ mr: 1 }} />
          Study quickly
        </ToggleButton>
        <ToggleButton
          value="memorize"
          sx={{
            textTransform: "none",
            "&.Mui-selected": {
              backgroundColor: "#423BA0",
              color: "white",
              "&:hover": {
                backgroundColor: "#2C287E",
              },
            },
          }}
        >
          <CheckIcon sx={{ mr: 1 }} />
          Memorize it all
        </ToggleButton>
      </ToggleButtonGroup>

      <Typography variant="subtitle1" sx={{ mt: 4 }}>
        How well do you know this material?
      </Typography>
      <FormControl component="fieldset">
        <RadioGroup defaultValue="some" name="knowledge-level" sx={{ mt: 1 }}>
          <FormControlLabel
            value="new"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#423BA0",
                  },
                }}
              />
            }
            label="It’s all new"
          />
          <FormControlLabel
            value="some"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#423BA0",
                  },
                }}
              />
            }
            label="I know some of it"
          />
          <FormControlLabel
            value="most"
            control={
              <Radio
                sx={{
                  "&.Mui-checked": {
                    color: "#423BA0",
                  },
                }}
              />
            }
            label="I know most of it"
          />
        </RadioGroup>
      </FormControl>

      <Box sx={{ display: "flex", justifyContent: "space-between", mt: 4 }}>
        <CustomButton
          variant="outlined"
          sx={{
            color: "#868dfb",
            borderColor: "#2C287E",
            "&:hover": {
              backgroundColor: "#423BA0",
              color: "white",
            },
          }}
        >
          Skip personalization
        </CustomButton>
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
