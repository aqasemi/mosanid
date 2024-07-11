import {React, useState, useEffect} from "react";
import {
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Button,
  Dialog,
  DialogContent,
  useTheme,
  Card,
  CardContent,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import { chapters, sessions } from "../../data/mockData";
import { tokens } from "../../theme";
import axios from "axios";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import PracticeSession from "../quiz";


const CustomCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  padding: theme.spacing(2),
  backgroundColor: "#1F2A40",
  marginBottom: theme.spacing(2),
}));

const SessionCard = ({ session }) => {
  return (
    <Box
      sx={{
        border: "2px solid #423BA0",
        borderRadius: "16px",
        overflow: "hidden",
        maxHeight: "250px",
        mb: 10,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#423BA0",
          color: "white",
          p: 2,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "bold" }}>
          {session.title}
        </Typography>
      </Box>
      <Box sx={{ p: 3 }}>
        <Typography variant="h6" sx={{ mb: 1 }}>
          No. of Questions: {session.questions}
        </Typography>
        <Typography variant="h6" sx={{ mb: 1 }}>
          Duration: {session.duration}
        </Typography>
        <Typography variant="h6">Score: {session.score}/10</Typography>
      </Box>
    </Box>
  );
};

const CourseSectionOne = ({ onStartPractice }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [data, setData] = useState([]);

  useEffect(() => {
    const url = window.location.origin;
    axios.get(url+'/get_courses')
      .then(response => setData(response.data))
      .catch(error => {console.log(error); setData({sessions: sessions, chapters: chapters})});
      console.log('hiiiiiiiiiii')
      console.log(data)
  }, []);


  return (
    <Box>
      <Box display="flex" alignItems="center" mb={2}>
        <img
          alt="profile-user"
          width="70px"
          height="70px"
          src={`../../assets/BookIcon.png`}
          style={{
            borderRadius: "50%",
            marginRight: "16px",
          }}
        />
        <Typography variant="h4" gutterBottom>
          CPCS-203 Programming (II)
        </Typography>
      </Box>

      {data.chapters && data.chapters.length > 0 ? (
        data.chapters.map((chapter, index) => (
        <Accordion
          key={index}
          sx={{
            mb: 2,
            backgroundColor: colors.primary[400],
            color: "white",
            border: "2px solid #423BA0",
            borderRadius: "16px",
            overflow: "hidden",
          }}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
          >
            <Typography variant="h6">
              <Typography
                component="span"
                variant="h6"
                sx={{ fontWeight: "bold" }}
              >
                {chapter.title.split(":")[0]}:
              </Typography>{" "}
              {chapter.title.split(":")[1]}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography
              variant="subtitle1"
              sx={{ color: "white", mb: 2, fontWeight: "bold" }}
            >
              Practice Sessions
            </Typography>
            <Box sx={{ mb: 2 }}>
              <Grid container spacing={2}>
                  {data.sessions && data.sessions.length > 0 ? (
                    data.sessions.map((session, index) => (
                  <Grid item xs={12} sm={6} md={3} key={index}>
                    <SessionCard session={session} />
                  </Grid>
                    ))
                  ) : (
                    <Typography>No sessions available</Typography>
                  )}
                <Grid item xs={12} sm={6} md={3}>
                  <Box
                    sx={{
                      border: "2px solid #423BA0",
                      borderRadius: "16px",
                      overflow: "hidden",
                      mb: 4,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "185px",
                    }}
                  >
                    <Button
                      variant="outlined"
                      startIcon={<AddIcon />}
                      sx={{
                        width: "100%",
                        height: "100%",
                        borderStyle: "dashed",
                        borderRadius: "8px",
                        color: "white",
                        backgroundColor: "#423BA0",
                        "&:hover": {
                          backgroundColor: "#2C287E",
                        },
                      }}
                      onClick={onStartPractice} // call the function when the student click on the button
                    >
                      Start new
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </AccordionDetails>
        </Accordion>
        ))
      ) : (
        <Typography>No chapters available</Typography>
      )}
    </Box>
  );
  
};

const OngoingCompetitions = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box>
      <Box display="flex" alignItems="center" mb={2}>
        <MilitaryTechIcon
          sx={{ color: "#4AA5FF", fontSize: 50, marginRight: "16px" }}
        />
        <Typography variant="h4" gutterBottom>
          Ongoing competitions
        </Typography>
      </Box>
      <CustomCard
        sx={{
          borderRadius: "16px",
          padding: theme.spacing(2),
          marginBottom: theme.spacing(2),
          color: "white",
          mb: 2,
          backgroundColor: colors.primary[400],
          border: "2px solid #423BA0",
          overflow: "hidden",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CustomCard
              sx={{
                backgroundColor: "#423BA0",
              }}
            >
              <CardContent>
                <Typography variant="subtitle1" sx={{ opacity: 0.8 }}>
                  CPCS-203 Programming (II)
                </Typography>
                <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                  Chapter 8: Objects and Classes
                </Typography>
              </CardContent>
            </CustomCard>
            <Box>
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  backgroundColor: colors.primary[400],
                  borderRadius: "16px",
                  padding: theme.spacing(1, 2),
                  boxShadow: theme.shadows[2],
                  ml: 2,
                }}
              >
                <AvatarGroup max={4}>
                  <Avatar sx={{ backgroundColor: "#4f94d4" }}>A</Avatar>
                  <Avatar sx={{ backgroundColor: "#6a6ee5" }}>D</Avatar>
                  <Avatar sx={{ backgroundColor: "#5a5ee4" }}>E</Avatar>
                  <Avatar sx={{ backgroundColor: "#3b49e4" }}>S</Avatar>
                  <Avatar sx={{ backgroundColor: "#2b34e4" }}>S</Avatar>
                </AvatarGroup>
                <Typography variant="body1" sx={{ ml: 1, color: "white" }}>
                  + 23 students
                </Typography>
              </Box>
              <Box sx={{ ml: 2, mt: 2 }}>
                <Typography variant="body2" sx={{ mb: 1, fontSize: 15 }}>
                  Instructor: <strong>Mohammed Alghamdi</strong>
                </Typography>
                <Typography variant="body2" sx={{ mb: 1, fontSize: 15 }}>
                  Time: <strong>11/7/2024 9:00PM-10:00PM</strong>
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              padding: theme.spacing(2),
              borderRadius: "16px",
            }}
          >
            <Button
              variant="contained"
              sx={{
                width: "150px",
                height: "50px",
                backgroundColor: "#423BA0",
                fontSize: 20,
                "&:hover": {
                  backgroundColor: "#2C287E",
                },
              }}
            >
              Start
            </Button>
          </Box>
        </CardContent>
      </CustomCard>
    </Box>
  );
};

const COURSES = () => {
  const [open, setOpen] = useState(false); // state to control dialog visibility
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const handleStartPractice = () => {
    setOpen(true); // show dialog when start button is clicked
  };

  return (
    <Box m="20px">
      <CourseSectionOne onStartPractice={handleStartPractice} />{" "}
      {/* Pass the function as a prop */}
      <Box mt={10}>
        <OngoingCompetitions />
      </Box>
      <Box sx={{ height: "2rem" }} />
      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            borderRadius: "16px",
            background: colors.primary[400],
          },
        }}
      >
        <DialogContent>
          <PracticeSession handleClose={() => setOpen(false)} />
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default COURSES;