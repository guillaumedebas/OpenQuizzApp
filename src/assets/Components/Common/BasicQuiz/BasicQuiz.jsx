import { Box, Typography } from '@mui/material'
import BasicQuestion from '../BasicQuestion/BasicQuestion'
import PropTypes from 'prop-types'
import BasicButton from '../BasicButton/BasicButton'
import { useState } from 'react'


const BasicQuiz = ({ questions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [answerResults, setAnswerResults] = useState({})

  const handleAnswerChange = (questionId, selectedAnswer) => {
    const updatedAnswers = { ...selectedAnswers }
    updatedAnswers[questionId] = selectedAnswer
    setSelectedAnswers(updatedAnswers)

  }


  const checkAnswers = () => {
    const results = {};
    for (const questionId in selectedAnswers) {
      if (Object.hasOwnProperty.call(selectedAnswers, questionId)) {
        const selectedAnswer = selectedAnswers[questionId];
        const answerId = parseInt(selectedAnswer.replace("answer-", ""), 10);
        const isCorrect = questions[questionId].answers[answerId].correct;
        results[questionId] = isCorrect;
      }
    }
    setAnswerResults(results);
  };


  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
    
    }}>
      {questions.map((question) => (
        <Box key={question.questionId}>
          <BasicQuestion
            question={question}
            handleAnswerChange={handleAnswerChange}
          />
          {answerResults[question.questionId] !== undefined && (
            <Typography sx={{ color: answerResults[question.questionId] ? 'green' : 'red' }}>
              {answerResults[question.questionId] ? 'Bonne réponse' : 'Mauvaise réponse'}
            </Typography>
          )}
        </Box>
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