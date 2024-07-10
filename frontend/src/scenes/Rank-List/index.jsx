import React from "react";
import { Box, Typography, Paper, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import QHeader from "../../components/QHeader";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const RankItem = styled(Box)(({ theme, rank }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(rank === 1 ? 2 : 1.5, 2),
  margin: theme.spacing(rank === 1 ? 2 : 1, 0),
  backgroundColor: rank === 1 ? "#1E1773" : "#574edb", // Change background color for first rank and others
  color: rank === 1 ? "#fff" : "#fff",
  borderRadius: "12px",
  boxShadow: rank === 1 ? "0 8px 16px rgba(0,0,0,0.1)" : "none",
  fontWeight: rank === 1 ? "bold" : "normal",
  zIndex: rank === 1 ? 1 : 0, // Make the first rank row appear in front
  width: rank === 1 ? `calc(100% + 28px)` : "100%", // Add 14px to each side
  marginLeft: rank === 1 ? "-14px" : "0", // Adjust margin to center the first row
  marginRight: rank === 1 ? "-14px" : "0", // Adjust margin to center the first row
}));

const RankNumber = styled(Typography)(({ theme, rank }) => ({
  backgroundColor: rank === 1 ? "#1E1773" : "#574edb", // Change background color for first rank number and others
  color: "#fff",
  borderRadius: "50%",
  padding: theme.spacing(0.5, 1.5),
  fontWeight: "bold",
  fontSize: "18px",
  textAlign: "center",
  width: "50px",
}));

const RankHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(1, 2),
  borderRadius: "12px",
  marginBottom: theme.spacing(2),
  color: "#423BA0",
  width: "100%",
}));

const RankColumn = styled(Box)(({ theme }) => ({
  flex: 1,
  display: "flex",
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

const RankList = () => {
  const rankings = [
    { rank: 1, name: "Abdulaziz Jazzar", score: 600 },
    { rank: 2, name: "Abdullah Almutairi", score: 590 },
    { rank: 3, name: "Nasser Alghamdi", score: 570 },
    { rank: 4, name: "Faisal Alharbi", score: 560 },
    { rank: 5, name: "Omar Al-Otaibi", score: 555 },
  ];

  const handleClose = () => {
    console.log("Close button clicked");
  };

  return (
    <Box
      sx={{
        backgroundColor: "#f0f0f0",
        minHeight: "100vh",
        padding: 4,
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
            <EmojiEventsIcon sx={{ mr: 1 }} />
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

        <RankHeader>
          <RankColumn>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Rank
            </Typography>
          </RankColumn>
          <RankColumn>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textAlign: "left" }}
            >
              Name
            </Typography>
          </RankColumn>
          <RankColumn>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", textAlign: "center" }}
            >
              Score
            </Typography>
          </RankColumn>
        </RankHeader>
        <Box>
          {rankings.map((item) => (
            <RankItem key={item.rank} rank={item.rank}>
              <RankColumn>
                <RankNumber rank={item.rank}>{item.rank}</RankNumber>
              </RankColumn>
              <RankColumn>
                <Typography variant="h6" sx={{ textAlign: "left" }}>
                  {item.name}
                </Typography>
              </RankColumn>
              <RankColumn>
                <Typography
                  variant="h6"
                  sx={{
                    textAlign: "center",
                    color: item.rank === 1 ? "#fff" : "#fff",
                  }}
                >
                  {item.score}
                </Typography>
              </RankColumn>
            </RankItem>
          ))}
        </Box>
      </Paper>
    </Box>
  );
};

export default RankList;
