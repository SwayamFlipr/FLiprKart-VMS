import React, { memo } from 'react';

import TheLayout from '../container/TheLayout';
// import PAGE_ROUTES from '../enum/page-routes';

const ProtectedRoute = () => {
  return <TheLayout />;
};

export default memo(ProtectedRoute);
