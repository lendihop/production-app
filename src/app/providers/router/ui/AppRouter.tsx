import { Suspense } from 'react';

import { Route, Routes } from 'react-router-dom';

import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ path, element, ...rest }) => (
          <Route key={path} path={path} element={<div className="page-wrapper">{element}</div>} {...rest} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
