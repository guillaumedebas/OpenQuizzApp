import './App.css';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import BasicCard from './assets/Components/Common/BasicCard/BasicCard';
import { questions } from './assets/Components/Common/BasicQuestion/const/questions';
import BasicQuiz from './assets/Components/Common/BasicQuiz/BasicQuiz';

function App() {
  const getHeader = () => (
    <Typography variant="h2" align="center">
      OpenQuizzApp
    </Typography>
  );

  const getContent = () => (
    <BasicQuiz questions={questions} />
  );

  return (
    <Container maxWidth="false" sx={{ padding: '0!important', height: '100vh' }}>
      <Grid container spacing={2} sx={{ height: '100%' }}>
     
        <Grid item xs={12}>
          <Box sx={{  width: '100%' }}>
            {getHeader()}
          </Box>
        </Grid>

  
        <Grid item xs={12} container justifyContent="center" alignItems="center">
          <BasicCard content={getContent()} />
        </Grid>

       
        <Grid item xs={12}>
          <Box sx={{  width: '100%', textAlign: 'center', padding: '10px' }}>
            <Typography variant="subtitle1">
              Réalisé par Guillaume Debas
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
