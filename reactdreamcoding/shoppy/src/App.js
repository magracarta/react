import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router";
import Navbar from "./components/Navbar";

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Navbar/>
        <Outlet/>
      </QueryClientProvider>
    </>
  );
}

export default App;
