import { Link } from 'react-router-dom';

interface NavigationButtonProps {
  path: string;
  buttonText: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ path, buttonText }) => {
  return (
    <Link to={path}>
      <button className='sticky-button'>{buttonText}</button>
    </Link>
  );
};

export default NavigationButton;
