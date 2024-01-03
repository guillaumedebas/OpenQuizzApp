import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import PropTypes from 'prop-types';
import BasicButton from '../BasicButton/BasicButton';



const BasicQuestion = ({ question }) => {
    return (
        <FormControl>
            <FormLabel
                id="question-test"
                sx={{ color: 'black' }}
            >
                {question}
            </FormLabel>
            <RadioGroup
                aria-labelledby="question-test"
                defaultValue="yes"
                name="radio-buttons-group"

            >
                <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
            <BasicButton
                variant="contained"
                color="primary"
                size="small"
                sx={{
                    ml: 'auto',
                }}

            >Valider</BasicButton>
        </FormControl>
    )
}
BasicQuestion.propTypes = {
    question: PropTypes.string
};

export default BasicQuestion