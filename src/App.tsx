import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TokenPage from "./pages/TokenPage";
import MyTokensPage from "./pages/MyTokensPage";
import { CryptoData } from "./types/CryptoDataTypes";

const queryClient = new QueryClient();

const App: React.FC = (): JSX.Element => {
  const [selectedTokens, setSelectedTokens] = React.useState<CryptoData[]>([]);

  const addToMyTokens = (token: CryptoData) => {
    if (!selectedTokens.some((t) => t.id === token.id)) {
      setSelectedTokens((prev) => [...prev, token]);
    }
  };

  const handleRemoveToken = (tokenToRemove: CryptoData) => {
    setSelectedTokens((prevTokens) =>
      prevTokens.filter((token) => token.id !== tokenToRemove.id)
    );
  };

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
