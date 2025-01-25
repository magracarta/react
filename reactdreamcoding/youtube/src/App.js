import React from 'react';
import { Outlet } from 'react-router';
import SearchHeader from './components/SearchHeader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClinet= new QueryClient();
function App() {

  return (
    <>
      <SearchHeader/>
      <QueryClientProvider client={queryClinet}>
        <Outlet/>
      </QueryClientProvider>
    </>
  );
}

export default App;