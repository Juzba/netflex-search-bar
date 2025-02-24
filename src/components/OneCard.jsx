import './OneCard.scss';
import PropTypes from 'prop-types';

const OneCard = ({ image, title, age, tags, description }) => {
    return (
        <div className='one-card'>
            <img src={image} alt='' />
            <h3>{title}</h3>
            <p>{age}</p>
            <p>{tags}</p>
            <p>{description}</p>
        </div>
    );
};

OneCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
    tags: PropTypes.number.isRequired,
    description: PropTypes.number.isRequired,
};

export default OneCard;
