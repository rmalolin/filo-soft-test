import { Outlet, ScrollRestoration } from 'react-router-dom';

const Layout: React.FC = () => {
  return (
    <>
      <ScrollRestoration
        getKey={({ pathname, key }) => (['/list'].includes(pathname) ? pathname : key)}
      />
      <Outlet />
    </>
  );
};

export default Layout;
