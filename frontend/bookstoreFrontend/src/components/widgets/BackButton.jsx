import { Link } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import "./BackButton.css";

const BackButton = ({ destination = '/' }) => {
  return (
    <div className='back-button'>
        <h1>hi</h1>
        <Link to={destination} className='back-button-link'>
            <BsArrowLeft className='arrow' />
        </Link>
    </div>
  );
};

export default BackButton;