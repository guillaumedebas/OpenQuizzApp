import { Box } from '@mui/material'
import BasicQuestion from '../BasicQuestion/BasicQuestion'
import PropTypes from 'prop-types'
import BasicButton from '../BasicButton/BasicButton'
import { useState } from 'react'


const BasicQuiz = ({ questions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({})

  const handleAnswerChange = (questionId, selectedAnswer) => {
    const updatedAnswers = { ...selectedAnswers }
    updatedAnswers[questionId] = selectedAnswer
    setSelectedAnswers(updatedAnswers)

  };
  const checkAnswers = () => {
    for (const questionId in selectedAnswers) {
      if (Object.hasOwnProperty.call(selectedAnswers, questionId)) {
        const selectedAnswer = selectedAnswers[questionId];
        console.log(`Question ID: ${questionId}, Selected Answer: ${selectedAnswer}`);
      }
    }
  };


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
          handleAnswerChange={handleAnswerChange}
        />
      ))}
      <BasicButton
        variant="contained"
        color="primary"
        size="small"
        sx={{
          mt: 2,
        }}
        onClick={checkAnswers}
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
      label: PropTypes.string.isRequired,
      correct: PropTypes.bool.isRequired
    })).isRequired
  })).isRequired
};

export default BasicQuiz