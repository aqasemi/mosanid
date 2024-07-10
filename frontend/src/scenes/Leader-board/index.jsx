import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import QHeader from "../../components/QHeader";

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: "#f0f0f0",
  minHeight: "100vh",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: theme.spacing(6),
}));

const LeaderboardContainer = styled(Paper)(({ theme }) => ({
  maxWidth: 700,
  width: "100%",
  padding: theme.spacing(4),
  borderRadius: "16px",
  backgroundColor: "#fff",
  marginTop: theme.spacing(1),
  textAlign: "center",
}));

const LeaderboardHeader = styled(Box)(({ theme }) => ({
  backgroundColor: "#cfe2ff",
  color: "#0d6efd",
  padding: theme.spacing(1, 4),
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  fontWeight: "bold",
  fontSize: "24px",
  textAlign: "center",
  display: "inline-block",
  marginBottom: theme.spacing(4),
  marginTop: theme.spacing(4), // Add marginTop to create space
}));

const LeaderboardItem = styled(Box)(({ theme, rank }) => ({
  display: "grid",
  gridTemplateColumns: "50px 1fr 100px",
  justifyContent: "space-between",
  alignItems: "center",
  padding: theme.spacing(rank === 1 ? 2 : 1.5, 2),
  margin: theme.spacing(rank === 1 ? 2 : 1, 0),
  backgroundColor: "#fff",
  color: "#423BA0",
  borderRadius: "12px",
  fontWeight: rank === 1 ? "bold" : "normal",
  zIndex: rank === 1 ? 1 : 0,
  width: rank === 1 ? `calc(100% + 28px)` : "100%",
  marginLeft: rank === 1 ? "-14px" : "0",
  marginRight: rank === 1 ? "-14px" : "0",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
}));

const RankNumber = styled(Typography)(({ theme }) => ({
  backgroundColor: "#fff",
  color: "#423BA0",
  fontWeight: "bold",
  borderRadius: "50%",
  padding: theme.spacing(0.5, 1.5),
  fontSize: "18px",
  textAlign: "center",
  width: "50px",
}));

const LeaderboardAvatar = styled(Box)(({ theme, rank }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: rank === 1 ? "110px" : "80px",
  height: rank === 1 ? "110px" : "80px",
  borderRadius: "50%",
  background:
    rank === 1
      ? "linear-gradient(to bottom right, #1E1773, #423BA0)"
      : "linear-gradient(to bottom right, #574edb, #756edf)",
  color: "#fff",
  marginBottom: theme.spacing(1),
  border: rank === 1 ? "5px solid #FFC619" : "5px solid #7196FF",
  position: "relative",
  zIndex: rank === 1 ? 1 : 0,
  top: rank === 1 ? "-20px" : "0",
}));

const NumberCircle = styled(Box)(({ rank }) => ({
  position: "absolute",
  bottom: "-10px",
  left: "50%",
  transform: "translateX(-50%)",
  backgroundColor: rank === 1 ? "#FFC619" : "#7196FF",
  color: "#fff",
  borderRadius: "50%",
  width: "30px",
  height: "30px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  fontSize: "16px",
}));

const AvatarText = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  fontWeight: "bold",
}));

const LeaderboardScore = styled(Typography)(({ theme }) => ({
  color: "#423BA0",
  fontSize: "16px",
  textAlign: "center",
  marginTop: "-10px",
}));

const LeaderboardNames = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginBottom: theme.spacing(4),
  color: "#423BA0",
  fontWeight: "bold",
  textAlign: "center",
}));

const CrownIcon = styled("img")({
  width: "20px", // Adjusted the size
  height: "20px", // Adjusted the size
  position: "absolute",
  top: "-20px", // Adjusted to be exactly above the circle border
  left: "50%",
  transform: "translateX(-50%)",
  zIndex: 2,
});

const ResultContainer = styled(Box)(({ theme }) => ({
  marginTop: theme.spacing(4),
  width: "100%",
}));

const Leaderboard = () => {
  const rankings = [
    { rank: 1, name: "Abdulaziz Jazzar", score: 1800 },
    { rank: 2, name: "Abdullah Almutairi", score: 1790 },
    { rank: 3, name: "Nasser Alghamdi", score: 1770 },
    { rank: 4, name: "Faisal Alharbi", score: 1760 },
    { rank: 5, name: "Omar Alotaibi", score: 1750 },
    { rank: 6, name: "Khalid Al-Qahtani", score: 1740 },
  ];

  const handleClose = () => {
    console.log("Close button clicked");
  };

  return (
    <Container>
      <QHeader
        title="Chapter 7: Multidimensional Array Practice"
        subtitle=""
        handleClose={handleClose}
      />
      <LeaderboardHeader>Leaderboard</LeaderboardHeader>
      <LeaderboardContainer>
        <LeaderboardNames>
          <Box
            mx={1}
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <LeaderboardAvatar rank={2}>
              <AvatarText>{rankings[1].name.charAt(0)}</AvatarText>
              <NumberCircle rank={2}>2</NumberCircle>
            </LeaderboardAvatar>
            <Typography
              variant="subtitle1"
              sx={{ color: "#423BA0", fontWeight: "bold", fontSize: "16px" }}
            >
              {rankings[1].name}
            </Typography>
            <LeaderboardScore>{rankings[1].score}pts</LeaderboardScore>
          </Box>
          <Box
            mx={1}
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <LeaderboardAvatar rank={1}>
              <CrownIcon src="../../assets/crown.png" alt="Crown" /> 
              <AvatarText>{rankings[0].name.charAt(0)}</AvatarText>
              <NumberCircle rank={1}>1</NumberCircle>
            </LeaderboardAvatar>
            <Typography
              variant="subtitle1"
              sx={{ color: "#423BA0", fontWeight: "bold", fontSize: "16px" }}
            >
              {rankings[0].name}
            </Typography>
            <LeaderboardScore>{rankings[0].score}pts</LeaderboardScore>
          </Box>
          <Box
            mx={1}
            textAlign="center"
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
            <LeaderboardAvatar rank={3}>
              <AvatarText>{rankings[2].name.charAt(0)}</AvatarText>
              <NumberCircle rank={3}>3</NumberCircle>
            </LeaderboardAvatar>
            <Typography
              variant="subtitle1"
              sx={{ color: "#423BA0", fontWeight: "bold", fontSize: "16px" }}
            >
              {rankings[2].name}
            </Typography>
            <LeaderboardScore>{rankings[2].score}pts</LeaderboardScore>
          </Box>
        </LeaderboardNames>
        <ResultContainer>
          <Box display="grid" gridTemplateColumns="50px 1fr 100px" px={2} mb={2}>
            <Typography
              variant="h6"
              sx={{ color: "#423BA0", fontWeight: "bold", textAlign: "center" }}
            >
              Rank
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#423BA0", fontWeight: "bold", textAlign: "left" }}
            >
              Name
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: "#423BA0", fontWeight: "bold", textAlign: "center" }}
            >
              Score
            </Typography>
          </Box>
          {rankings.slice(3).map((item, index) => (
            <LeaderboardItem key={index} rank={item.rank}>
              <RankNumber rank={item.rank}>{item.rank}</RankNumber>
              <Typography variant="h6" sx={{ flex: 1, textAlign: "left" }}>
                {item.name}
              </Typography>
              <LeaderboardScore>{item.score}pts</LeaderboardScore>
            </LeaderboardItem>
          ))}
        </ResultContainer>
      </LeaderboardContainer>
    </Container>
  );
};

export default Leaderboard;
