'use client';

import { useState, useEffect, useRef } from 'react';
import { useChat } from 'ai/react';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Paper,
  TextField,
  Button,
  Box,
  Slide,
  Fab,
  Container,
} from '@mui/material';
import ChatIcon from '@mui/icons-material/Chat';
import SendIcon from '@mui/icons-material/Send';
import CloseIcon from '@mui/icons-material/Close';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase'; 

const styles = {
  chatContainer: {
    position: 'fixed',
    bottom: 80,
    right: 16,
    width: '100%',
    maxWidth: '650px', 
    height: '570px', 
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '16px',
    overflow: 'hidden',
    backgroundImage: 'url(images/robot3.png)', 
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  messageBox: {
    flex: 1,
    overflowY: 'auto',
    padding: 16,
  },
  messageUser: {
    backgroundColor: '#3f51b5',
    color: 'white',
    padding: 5,
    borderRadius: 16,
    maxWidth: '80%',
    boxShadow: 2,
  },
  messageAI: {
    backgroundColor: '#e0e0e0',
    color: 'black',
    padding: 5,
    borderRadius: 16,
    maxWidth: '80%',
    boxShadow: 2,
  }
};

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  const [open, setOpen] = useState(true);
  const endOfMessagesRef = useRef(null); 

  const handleToggleChat = () => {
    setOpen(!open);
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  
  useEffect(() => {
    endOfMessagesRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        padding: '16px',
      }}
    >
      {/* Sign Out Button */}
      <Button
        variant="contained"
        color="secondary"
        onClick={handleSignOut}
        style={{ position: 'absolute', top: 16, right: 16 }}
      >
        Sign Out
      </Button>

      <Container>
        <Fab
          color="primary"
          aria-label="chat"
          onClick={handleToggleChat}
          style={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          <ChatIcon />
        </Fab>
        <Slide direction="up" in={open} mountOnEnter unmountOnExit>
          <Paper elevation={4} style={styles.chatContainer}>
            <AppBar position="static" style={{ backgroundColor: 'rgba(63, 81, 181, 0.8)' }}>
              <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 1 }}>
                  Chatbot
                </Typography>
                <IconButton edge="end" color="inherit" onClick={handleToggleChat}>
                  <CloseIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Box style={styles.messageBox}>
              {messages.map((m, index) => (
                <Box
                  key={index}
                  display="flex"
                  justifyContent={m.role === 'user' ? 'flex-end' : 'flex-start'}
                  mb={2}
                >
                  <Box
                    style={m.role === 'user' ? styles.messageUser : styles.messageAI}
                  >
                    <Typography variant="body1" style={{ whiteSpace: 'pre-wrap' }}>
                    
                      {m.content}
                    </Typography>
                  </Box>
                </Box>
              ))}
              <div ref={endOfMessagesRef} /> {/* Empty div to scroll into view */}
            </Box>
            <form onSubmit={handleSubmit} style={{ display: 'flex', padding: 16 }}>
              <TextField
                variant="outlined"
                fullWidth
                value={input}
                placeholder="Type your message..."
                onChange={handleInputChange}
                style={{ marginRight: 8, borderRadius: '20px' }}
                InputProps={{
                  style: { borderRadius: '20px' },
                }}
              />
              <Button
                variant="contained"
                color="primary"
                endIcon={<SendIcon />}
                type="submit"
                style={{ borderRadius: '20px' }}
              >
              </Button>
            </form>
          </Paper>
        </Slide>
      </Container>
    </div>
  );
}