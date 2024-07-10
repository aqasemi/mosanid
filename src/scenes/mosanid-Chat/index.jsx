import React from 'react';
import { Box, Typography, Button, Paper, IconButton } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import PersonIcon from '@mui/icons-material/Person';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';

const styles = {
  container: {
    backgroundColor: '#1E1E1E',
    minHeight: '100vh',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: '#FFFFFF',
  },
  questionBox: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
    backgroundColor: '#333333',
    borderRadius: '10px',
    padding: '10px 20px',
    width: '100%',
    maxWidth: '800px',
  },
  questionIcon: {
    marginRight: '10px',
  },
  questionText: {
    fontWeight: 'bold',
    fontSize: '1.5em',
  },
  answerBox: {
    backgroundColor: '#2E2E2E',
    padding: '20px',
    borderRadius: '10px',
    marginBottom: '20px',
    width: '100%',
    maxWidth: '800px',
    display: 'flex',
    alignItems: 'flex-start',
  },
  answerIcon: {
    marginRight: '10px',
  },
  regenerateButton: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px',
  },
  footer: {
    marginTop: 'auto',
    padding: '10px',
    textAlign: 'center',
    color: '#A0A0A0',
  },
};

const mosanidChat = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.questionBox}>
        <PersonIcon sx={styles.questionIcon} />
        <Typography sx={styles.questionText}>What is a Chatbot?</Typography>
      </Box>
      <Paper sx={styles.answerBox}>
        <ChatBubbleOutlineIcon sx={styles.answerIcon} />
        <Typography>
          A chatbot is a computer program that simulates human conversation through voice commands or text chats or both. It can be integrated with various messaging platforms like Facebook Messenger, WhatsApp, WeChat, etc. and can be used for a variety of purposes, such as customer service, entertainment, and e-commerce.
        </Typography>
      </Paper>
      <Box sx={styles.regenerateButton}>
        <Button variant="contained" color="primary" startIcon={<RefreshIcon />}>
          Regenerate response
        </Button>
      </Box>
      <Box sx={styles.footer}>
        ChatGPT Jan 9 Version. Free Research Preview. Our goal is to make AI systems more natural and safe to interact with. Your feedback will help us improve.
      </Box>
    </Box>
  );
};

export default mosanidChat;
