import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TokenPage from "./pages/TokenPage";
import MyTokensPage from "./pages/MyTokensPage";
import { useStore } from "./stores/Stores";

const queryClient = new QueryClient();

const App: React.FC = (): JSX.Element => {
  const selectedTokens = useStore((state) => state.selectedTokens);
  const addToMyTokens = useStore((state) => state.addToMyTokens);
  const handleRemoveToken = useStore((state) => state.handleRemoveToken);

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<TokenPage addToMyTokens={addToMyTokens} />}
          />
          <Route
            path="mytokens"
            element={
              <MyTokensPage
                selectedTokens={selectedTokens}
                removeToken={handleRemoveToken}
              />
            }
          />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
