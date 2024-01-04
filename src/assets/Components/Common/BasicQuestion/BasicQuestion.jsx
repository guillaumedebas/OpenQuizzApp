import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types';



const BasicQuestion = ({ question }) => {
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
            >
                {question.answers.map((item) => (
                    <FormControlLabel
                        key={item.answersId}
                       value={`${item.label.toLowerCase().replace(/\s+/g, '').slice(0, 7)}${item.answersId}`}
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
            label: PropTypes.string.isRequired
        })).isRequired
    }).isRequired
}

export default BasicQuestion