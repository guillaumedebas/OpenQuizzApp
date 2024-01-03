import './App.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BasicCard from './assets/Components/Common/BasicCard/BasicCard';
import BasicQuestion from './assets/Components/Common/BasicQuestion/BasicQuestion';


const getHeader = () => {
  <>

  </>
};

function App() {
  const question = "Are you ready for the first question ?"
  const getContent = () => (
     <Box
      sx={{
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        height: '100%',
      }}
    >
      <BasicQuestion
      question={question}
       />
    </Box>
  );


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
        <BasicCard
          header={getHeader()}
          content={getContent()}

        />
      </Box>

    </Container>
  )
}

export default App
