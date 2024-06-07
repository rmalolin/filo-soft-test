import Dashboard from '../../components/Dashboard';
import NavigationButton from '../../components/NavigationButton';

const DashboardPage: React.FC = () => {
  return (
    <>
      <h1>Dashboard Page</h1>
      <NavigationButton path='/list' buttonText='Go to List' />
      <Dashboard />
    </>
  );
};

export default DashboardPage;
