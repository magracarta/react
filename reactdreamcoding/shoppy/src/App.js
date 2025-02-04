import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router";
import { AuthoContextProvider } from "./components/context/AuthContext";
import Navbar from "./components/Navbar";

function App() {
  const queryClient = new QueryClient();
  
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <AuthoContextProvider>
          <Navbar/>
          <Outlet/>
        </AuthoContextProvider>
      </QueryClientProvider>
    </>
  );
}

export default App;
