import './App.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

function App() {


  return (
    <Container maxWidth="false"
      sx={{
        padding: '0!important'
      }}>
      <Box

        sx={{
          bgcolor: '#cfe8fc',
          height: '100vh',
          width: '100vw'
        }}>
        <Typography
          variant="h1"
          align="center"
        >
          OpenQuizzApp
        </Typography>

      </Box>

    </Container>
  )
}

export default App
