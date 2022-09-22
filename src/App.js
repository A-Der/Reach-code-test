import React from "react";
import SpaceApp from "./section3/section3";
import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <SpaceApp />
      </QueryClientProvider>
    </div>
  );
}

export default App;
