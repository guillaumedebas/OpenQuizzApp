import { Box } from '@mui/material'
import BasicQuestion from '../BasicQuestion/BasicQuestion'
import PropTypes from 'prop-types'
import BasicButton from '../BasicButton/BasicButton'

const BasicQuiz = ({ questions }) => {
  return (
    <Box sx={{ 
      display: 'flex', 
      flexDirection: 'column',
      alignItems: 'center' 
       }}>
     {questions.map((question) => (
        <BasicQuestion
          key={question.questionId}
          question={question}
        />
      ))}
      <BasicButton
        variant="contained"
        color="primary"
        size="small"
        sx={{ 
            mt: 2,
        }}
      >
        Valider
      </BasicButton>
    </Box>
  )
}
BasicQuiz.propTypes = {
    questions: PropTypes.arrayOf(PropTypes.shape({
        questionId: PropTypes.number.isRequired,
        questionText: PropTypes.string.isRequired,
        answers: PropTypes.arrayOf(PropTypes.shape({
            answersId: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired
        })).isRequired
    })).isRequired
};

export default BasicQuiz