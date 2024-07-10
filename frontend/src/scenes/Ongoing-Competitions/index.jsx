import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  useTheme,
  Avatar,
  AvatarGroup,
  Dialog,
  DialogContent,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { tokens } from "../../theme";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import PracticeSession from "../quiz";
import { useNavigate } from "react-router-dom";

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

const OngoingCompetitions = () => {
  const [open, setOpen] = useState(false); // state to control dialog visibility
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/Waiting-Competition");
  };

  return (
    <Box m="20px">
      <Box mt={10}>
        <OngoingCompetition onStart={handleStart} />
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

export default OngoingCompetitions;
