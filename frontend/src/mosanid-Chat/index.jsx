import React from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Paper,
  Divider,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import RefreshIcon from "@mui/icons-material/Refresh";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";

const Container = styled(Box)({
  display: "flex",
  minHeight: "100vh",
  backgroundColor: "#141B2D",
  color: "#fff",
});

const Content = styled(Box)({
  flex: 1,
  padding: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const Header = styled(Box)({
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "10px 20px",
  backgroundColor: "#1F2A40",
  borderRadius: "10px",
  marginBottom: "20px",
});

const ChatBox = styled(Paper)({
  width: "100%",
  backgroundColor: "#1F2A40",
  padding: "20px",
  borderRadius: "10px",
  marginBottom: "20px",
});

const Footer = styled(Box)({
  display: "flex",
  alignItems: "center",
  width: "100%",
});

const ChatGPTInterface = () => {
  return (
    <Container>
      <Content>
        <Header>
          <Typography variant="h6" textAlign="right">
            what is Object Oriented?{" "}
          </Typography>
          <IconButton color="inherit"></IconButton>
        </Header>
        <ChatBox elevation={3}>
          <Typography variant="h5" gutterBottom>
            Object-Oriented Programming (OOP){" "}
          </Typography>
          <Typography variant="body1" gutterBottom>
            is a programming paradigm centered around the concept of "objects,"
            which can be defined as instances of classes. These objects can
            contain data in the form of fields (also known as attributes or
            properties) and code in the form of methods (functions associated
            with an object's class). OOP is based on several key principles,
            including: Encapsulation: This principle involves bundling the data
            (attributes) and the methods (functions) that operate on the data
            into a single unit or class. It restricts direct access to some of
            the object's components, which can help prevent accidental
            interference and misuse of the data. Abstraction: This is the
            concept of hiding the complex implementation details of an object
            and exposing only the necessary and relevant parts to the outside
            world. It simplifies the interaction with objects by providing a
            clear interface.{" "}
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <Box>
              <IconButton color="inherit">
                <ThumbUpIcon />
              </IconButton>
              <IconButton color="inherit">
                <ThumbDownIcon />
              </IconButton>
            </Box>
            <IconButton color="inherit">
              <RefreshIcon />
            </IconButton>
          </Box>
        </ChatBox>{" "}
        <Header>
          <Typography variant="h6" textAlign="right">
            What are the common types of artificial intelligence?
          </Typography>
          <IconButton color="inherit"></IconButton>
        </Header>
        <ChatBox elevation={3}>
          <Typography variant="h5" gutterBottom>
            Artificial Intelligence (AI){" "}
          </Typography>
          <Typography variant="body1" gutterBottom>
            can be categorized in various ways based on its capabilities and
            functionalities. Here are the most common types of AI: Based on
            Capabilities Narrow AI (Weak AI) Definition: AI systems that are
            designed and trained to perform a specific task. Examples: Voice
            assistants like Siri and Alexa, recommendation systems used by
            Netflix and Amazon, image and facial recognition systems.
            Characteristics: Limited to a narrow domain, cannot perform tasks
            outside of its training.
          </Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
          >
            <Box>
              <IconButton color="inherit">
                <ThumbUpIcon />
              </IconButton>
              <IconButton color="inherit">
                <ThumbDownIcon />
              </IconButton>
            </Box>
            <IconButton color="inherit">
              <RefreshIcon />
            </IconButton>
          </Box>
        </ChatBox>
        <Footer>
          <TextField
            variant="outlined"
            placeholder="Type your message..."
            fullWidth
            InputProps={{
              style: {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                backgroundColor: "#1F2A40",
              },
            }}
          />
          <Button
            variant="contained"
            sx={{
              marginLeft: "10px",
              color: "#fff",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              backgroundColor: "#1F2A40",
            }}
          >
            Send
          </Button>
        </Footer>
      </Content>
    </Container>
  );
};

export default ChatGPTInterface;
