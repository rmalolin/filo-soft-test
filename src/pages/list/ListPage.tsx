import List from '../../components/List';
import NavigationButton from '../../components/NavigationButton';

const ListPage: React.FC = () => {
  return (
    <>
      <h1>List Page</h1>
      <NavigationButton path='/' buttonText='Go to Dashboard' />
      <List />
    </>
  );
};

export default ListPage;
