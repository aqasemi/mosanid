import React from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Avatar,
  AvatarGroup,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import ComprehensionChart from "../../components/ComprehensionChart";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import { tokens } from "../../theme"; // Assuming you have a tokens file for theme colors

const CustomCard = styled(Card)(({ theme }) => ({
  borderRadius: "16px",
  padding: theme.spacing(2),
  backgroundColor: "#1F2A40",
  marginBottom: theme.spacing(2),
}));

const participants = [
  { name: "Abdulaziz Jazzar", initial: "A" },
  { name: "Abdullah Almutairi", initial: "A" },
  { name: "Faisal Alharbi", initial: "F" },
  { name: "Khalid Al-Qahtani", initial: "K" },
  { name: "Mohammed Al-Fahad", initial: "M" },
  { name: "Nasser Alghamdi", initial: "N" },
  { name: "Omar Al-Otaibi", initial: "O" },
];

const colorss = [
  "#4B23B6",
  "#423BA0",
  "#6A67CE",
  "#8474D9",
  "#423BA0",
  "#7F81E3",
  "#A3A0E6",
];

const Content = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  backgroundColor: "#0f0f2e",
  padding: theme.spacing(3),
}));

const CourseCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#1e1e2e",
  color: "#fff",
  borderRadius: "12px",
  boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.25)",
  margin: theme.spacing(1),
  padding: theme.spacing(2),
  border: "1px solid #6C7CF7",
  position: "relative",
  overflow: "visible",
  width: "300px", // Adjusted width to match the example
  height: "200px", // Adjusted height to match the example
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
}));

const CustomButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  backgroundColor: "#6C7CF7",
  color: "#fff",
  textTransform: "none",
  "&:hover": {
    backgroundColor: "#5B6AD1",
  },
}));

const EnrolledCoursesContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "flex-start",
  gap: theme.spacing(1), // Reduced gap to make cards closer to each other
}));

const courses = [
  {
    title: "CPCS-222 Discrete Structures (I)",
    section: "C1",
    instructors: "Mohammed Alghamdi, Salem ",
  },
  {
    title: "CPCS-211 Digital Logic Design",
    section: "A1",
    instructors: "Mohammed Alghamdi",
  },
  {
    title: "CPCS-381 Human Computer Interaction (I)",
    section: "E1",
    instructors: "Mohammed Alghamdi",
  },
];

const OngoingCompetition = ({ onStart }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const visibleParticipants = participants.slice(0, 4);
  const remainingParticipantsCount =
    participants.length - visibleParticipants.length;

  return (
    <Box>
      <Box display="flex" alignItems="center" mb={2}>
        <MilitaryTechIcon
          sx={{ color: "#4AA5FF", fontSize: 50, marginRight: "16px"}}
        />
        <Typography variant="h4" fontWeight= "bold"  gutterBottom>
          Ongoing competitions
        </Typography>
      </Box>
      <CustomCard
        sx={{
          borderRadius: "16px",
          padding: theme.spacing(2),
          backgroundColor: "#1F2A40",
          marginBottom: theme.spacing(2),
          color: "white",
          mb: 2,
          backgroundColor: colors.primary[400],
          color: "white",
          border: "2px solid #423BA0",
          borderRadius: "16px",
          overflow: "hidden",
          mb: 4,
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
                  {visibleParticipants.map((participant, index) => (
                    <Avatar
                      key={index}
                      sx={{
                        backgroundColor: colorss[index % colorss.length],
                        color: "white",
                      }}
                    >
                      {participant.initial}
                    </Avatar>
                  ))}
                </AvatarGroup>
                {remainingParticipantsCount > 0 && (
                  <Typography variant="body1" sx={{ ml: 1, color: "white" }}>
                    + {remainingParticipantsCount} students
                  </Typography>
                )}
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
              onClick={onStart}
            >
              Start
            </Button>
          </Box>
        </CardContent>
      </CustomCard>
    </Box>
  );
};

const StudentHomePage = () => {
  const theme = useTheme();  // Initialize theme here
  const colors = tokens(theme.palette.mode);  // Initialize colors here

  const handleStart = () => {
    // Add your start logic here
    console.log("Competition started");
  };

  return (
    <Box display="flex">
      <Content>
        <Box mt={4} mb={4}> {/* Add marginBottom to create space */}
          <Box display="flex" alignItems="center" mb={2}>
            <img
              alt="profile-user"
              width="70px"
              height="70px"
              src={`../../assets/ph_books.png`}
              style={{
                borderRadius: "50%",
                marginRight: "16px",
              }}
            />
            <Typography variant="h3" sx={{ fontWeight: "bold", color: "#fff" }}>
              Enrolled courses
            </Typography>
          </Box>
          <EnrolledCoursesContainer>
            {courses.map((course, index) => (
              <CourseCard key={index}>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%", // Ensure CardContent takes full height of the Card
                  }}
                >
                  <Box>
                    <Typography
                      variant="h6"
                      sx={{ fontSize: 15, fontWeight: "bold" }}
                    >
                      {course.title}
                    </Typography>
                    <Typography variant="body2">
                      <Box component="span" sx={{ color: "#CCCAE5" }}>
                        Section:
                      </Box>{" "}
                      <Box component="span" sx={{ color: "#FFFFFF" }}>
                        {course.section}
                      </Box>
                    </Typography>
                    <Typography variant="body2">
                      Instructor/s: {course.instructors}
                    </Typography>
                  </Box>
                  <Box sx={{ textAlign: "center" }}>
                    <CustomButton variant="contained">View</CustomButton>
                  </Box>
                </CardContent>
              </CourseCard>
            ))}
          </EnrolledCoursesContainer>
        </Box>

        {/* Call OngoingCompetition */}
        <Box mb={4}> {/* Add marginBottom to create space */}
          <OngoingCompetition onStart={handleStart} />
        </Box>

        <Box mt={4}>
          <CustomCard
            sx={{
              borderRadius: "16px",
              padding: theme.spacing(2),
              backgroundColor: "#1F2A40",
              marginBottom: theme.spacing(2),
              color: "white",
              mb: 2,
              backgroundColor: colors.primary[400],
              color: "white",
              border: "2px solid #423BA0",
              borderRadius: "16px",
              overflow: "hidden",
              mb: 4,
            }}
          >
            <Typography variant="h3" sx={{ fontWeight: "bold", color: "#fff" }}>
              Comprehension of each course
            </Typography>
            <CardContent>
              <ComprehensionChart />
            </CardContent>
          </CustomCard>
        </Box>
      </Content>
    </Box>
  );
};

export default StudentHomePage;
