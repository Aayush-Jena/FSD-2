import { useState, useMemo } from 'react';
import { ThemeProvider, createTheme, CssBaseline, Box, Paper, Button as MUIButton, AppBar, Toolbar, Container } from '@mui/material';
import './App.css';
import Form from './components/Form';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? 'dark' : 'light',
          primary: {
            main: '#667eea',
          },
          secondary: {
            main: '#764ba2',
          },
        },
        shape: {
          borderRadius: 16,
        },
        typography: {
          fontFamily: '"Segoe UI", "Roboto", "Oxygen", "Ubuntu", sans-serif',
        }
      }),
    [darkMode]
  );

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar 
        position="static" 
        sx={{ 
          background: darkMode 
            ? 'linear-gradient(90deg, #2a2a2a 0%, #3a3a3a 100%)' 
            : 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)',
          boxShadow: '0 4px 20px rgba(102, 126, 234, 0.3)'
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Box sx={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: 1 }}>
            ✨ User Portal
          </Box>
          <MUIButton
            variant="contained"
            onClick={toggleTheme}
            sx={{ 
              borderRadius: 25,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.3)'
              }
            }}
          >
            {darkMode ? '☀️' : '🌙'}
          </MUIButton>
        </Toolbar>
      </AppBar>

      <Box
        sx={{
          minHeight: 'calc(100vh - 64px)',
          background: darkMode
            ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)'
            : 'linear-gradient(135deg, #f5f7fa 0%, #e8eef7 100%)',
          py: 6,
          transition: 'background 0.3s ease'
        }}
      >
        <Container maxWidth="sm">
          <Paper
            elevation={8}
            sx={{
              p: 5,
              borderRadius: 3,
              background: darkMode 
                ? 'rgba(30, 40, 60, 0.95)' 
                : 'rgba(255, 255, 255, 0.95)',
              border: darkMode 
                ? '1px solid rgba(102, 126, 234, 0.2)' 
                : '2px solid #667eea',
              backdropFilter: 'blur(15px)',
              boxShadow: darkMode
                ? '0 8px 32px rgba(0, 0, 0, 0.3)'
                : '0 8px 32px rgba(102, 126, 234, 0.2)',
              transition: 'all 0.3s ease'
            }}
          >
            <Form />
          </Paper>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;