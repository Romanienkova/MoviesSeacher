import { Outlet } from 'react-router-dom';

import { Header } from 'layout/index';

export const Layout = () => {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>
    </>
  );
};
