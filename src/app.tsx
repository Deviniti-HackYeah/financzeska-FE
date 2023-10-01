import { QueryClient, QueryClientProvider } from 'react-query';
import { Toaster } from '@/shared/components/toast/toaster';
import { RouterProvider } from 'react-router-dom';
import { router } from './core/router/router';
import { Suspense } from 'react';
import '@/shared/lib/i18n';

const queryClient = new QueryClient();

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </Suspense>
  );
}

export default App;
