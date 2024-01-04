import './App.css'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import BasicCard from './assets/Components/Common/BasicCard/BasicCard';
import { questions } from './assets/Components/Common/BasicQuestion/const/questions';
import BasicQuiz from './assets/Components/Common/BasicQuiz/BasicQuiz';


const getHeader = () => {
  <>

  </>
};

function App() {
  const getContent = () => (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
      }}
    >
      <BasicQuiz
        questions={questions}
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
