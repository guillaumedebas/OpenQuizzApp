import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PropTypes from 'prop-types';
import { cardStyles } from './styles';

const BasicCard = ({header,  content}) => {
    return (
        <Card 
        sx={cardStyles}
        >
        {header}
            <CardContent
            >
                {content}
            </CardContent>
        </Card>
    )
}
BasicCard.propTypes = {
    header: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ]),
    content: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ])
};

export default BasicCard