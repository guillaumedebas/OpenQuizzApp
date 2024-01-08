import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types'; 



const BasicQuestion = ({ question, handleAnswerChange }) => {
  const handleRadioChange = (event) => {
    handleAnswerChange(question.questionId, event.target.value)
  }
    return (
        <FormControl>
            <FormLabel
                id={`question-label-${question.questionId}`}
                sx={{
                     color: 'black',
                     fontWeight: 'bold'
                }}
            >
                {question.questionText}
            </FormLabel>
            <RadioGroup
                aria-labelledby={`question-label-${question.questionId}`}
                name={`question-${question.questionId}`}
                onChange={handleRadioChange}
            >
                {question.answers.map((item) => (
                    <FormControlLabel
                        key={item.answersId}
                       value={`answer-${item.answersId}`}
                        control={<Radio />}
                        label={item.label} />
                ))}
            </RadioGroup>
        </FormControl>
    )
}
BasicQuestion.propTypes = {
    question: PropTypes.shape({
        questionId: PropTypes.number.isRequired,
        questionText: PropTypes.string.isRequired,
        answers: PropTypes.arrayOf(PropTypes.shape({
            answersId: PropTypes.number.isRequired,
            label: PropTypes.string.isRequired,
            correct: PropTypes.bool.isRequired,
            explanation: PropTypes.string.isRequired
        })).isRequired
    }).isRequired,
    handleAnswerChange: PropTypes.func.isRequired
}

export default BasicQuestion