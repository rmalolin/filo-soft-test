import { useNavigate } from 'react-router-dom';

interface NavigationButtonProps {
  path: string;
  buttonText: string;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ path, buttonText }) => {
  const navigate = useNavigate();

  return (
    <button className='sticky-button' onClick={() => navigate(path)}>
      {buttonText}
    </button>
  );
};

export default NavigationButton;
