import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { appRouters } from './routes/appRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={appRouters} />;
    </QueryClientProvider>
  );
}

export default App;
