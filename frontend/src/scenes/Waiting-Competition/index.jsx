import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
} from "@mui/material";
import Groups2Icon from "@mui/icons-material/Groups2";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import QHeader from "../../components/QHeader"; // Import the QHeader component

const participants = [
  { name: "Abdulaziz Jazzar", initial: "A" },
  { name: "Abdullah Almutairi", initial: "A" },
  { name: "Faisal Alharbi", initial: "F" },
  { name: "Khalid Al-Qahtani", initial: "K" },
  { name: "Mohammed Al-Fahad", initial: "M" },
  { name: "Nasser Alghamdi", initial: "N" },
  { name: "Omar Al-Otaibi", initial: "O" },
];

const colors = [
  "#4B23B6",
  "#423BA0",
  "#6A67CE",
  "#8474D9",
  "#423BA0",
  "#7F81E3",
  "#A3A0E6",
];

const WaitingCompetition = () => {
  const [showAll, setShowAll] = useState(false);
  const [countdown, setCountdown] = useState(5);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const navigate = useNavigate();

  const handleShowMore = () => {
    setShowAll(!showAll);
  };

  const handleClose = () => {
    navigate("/Ongoing-Competitions");
  };

  const displayedParticipants = showAll
    ? participants
    : participants.slice(0, 7);

  useEffect(() => {
    const startCountdown = () => {
      setIsCountingDown(true);
    };
    const timer = setTimeout(startCountdown, 3000); // Wait 3 seconds before starting the countdown

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let timer;
    if (isCountingDown && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (isCountingDown && countdown === 0) {
      setCountdown("Start!"); // Set to "Start!" when countdown reaches 0
      setTimeout(() => {
        navigate("/Comp-Q"); // Redirect to Comp-Q after displaying "Start!" for a second
      }, 1000);
    }
    return () => clearTimeout(timer);
  }, [isCountingDown, countdown, navigate]);

  return (
    <Box sx={{ position: "relative" }}>
      <QHeader
        title="Chapter 7: "
        subtitle="Multidimensional Array Practice"
        handleClose={handleClose}
      />
      <Box
        sx={{
          backgroundColor: "#f0f0f0",
          minHeight: "100vh",
          filter: isCountingDown ? "blur(5px)" : "none",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#4B23B6",
            color: "white",
            px: 2,
            py: 1,
            width: "100%",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img
              src="../../assets/LogoLight.png"
              alt="Mosand Logo"
              style={{ width: 74, height: 40, marginRight: 16 }}
            />
          </Box>
          <Box
            sx={{ display: "flex", alignItems: "center", marginLeft: "auto" }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#6C7CF7",
                color: "white",
                textTransform: "none",
                mr: 2,
                "&:hover": {
                  backgroundColor: "#5B6AD1",
                },
              }}
            >
              Options
            </Button>
            <IconButton sx={{ color: "white" }} onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Box>
        </Box>

        <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
          <Box sx={{ width: "45%" }}>
            <Card
              sx={{
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: 3,
                mb: 3,
                background: "linear-gradient(to right, #423BA0, #18153A)", // Gradient background
                color: "white",
              }}
            >
              <CardContent>
                <Typography variant="h6" sx={{ color: "#C9DAF8" }}>
                  CPCS-203 Programming (II)
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: "bold" }}>
                  Chapter 8: Objects and Classes
                </Typography>
              </CardContent>
            </Card>
            <Card
              sx={{
                background: "#FFFFFF",
                borderRadius: "20px",
                overflow: "hidden",
                boxShadow: 3,
              }}
            >
              <CardContent>
                <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
                  <Groups2Icon sx={{ color: "#9696C6", mr: 1, fontSize: 35 }} />
                  <Typography
                    variant="h4"
                    sx={{ color: "#4B23B6", fontWeight: "bold" }}
                  >
                    Participants
                  </Typography>
                </Box>
                <List>
                  {displayedParticipants.map((participant, index) => (
                    <ListItem
                      key={index}
                      sx={{
                        backgroundColor: "#EBF0FB",
                        borderRadius: "43px",
                        mb: 1,
                        "&:last-child": { mb: 0 },
                      }}
                    >
                      <ListItemText
                        primary={
                          <Typography
                            variant="h5"
                            sx={{ color: "#423BA0", fontSize: "20px" }}
                          >
                            {`${index + 1}. ${participant.name}`}
                          </Typography>
                        }
                      />
                      <ListItemAvatar>
                        <Avatar
                          sx={{
                            background: colors[index % colors.length],
                            color: "white",
                          }}
                        >
                          {participant.initial}
                        </Avatar>
                      </ListItemAvatar>
                    </ListItem>
                  ))}
                  <ListItem button onClick={handleShowMore}>
                    <ListItemText
                      primary={
                        <Typography
                          variant="body2"
                          sx={{ color: "#4B23B6", textAlign: "center" }}
                        >
                          {showAll ? "Show less" : "Show more"}
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </CardContent>
            </Card>
          </Box>
          <Box
            sx={{
              width: "45%",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 200,
                height: 200,
                background: "linear-gradient(to right, #423BA0, #18153A)",
                maskImage: "url(/assets/waiting.png)",
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center",
              }}
            />
            <Typography
              variant="h4"
              sx={{ color: "#4B23B6", mt: 2, fontWeight: "bold" }}
            >
              Wait for the instructor to start ...
            </Typography>
          </Box>
        </Box>
      </Box>

      {isCountingDown && (
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: 0,
            right: 0,
            transform: "translateY(-50%)",
            backgroundColor: "rgba(75, 35, 182, 0.1)",
            textAlign: "center",
            p: 1, // Add padding to make it thinner
          }}
        >
          <Typography variant="h4" sx={{ color: "#4B23B6", mb: 1 }}>
            Competition will start in :
          </Typography>
          <Typography variant="h2" sx={{ color: "#4B23B6" }}>
            {countdown > 0 ? countdown : "Start!"}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default WaitingCompetition;
