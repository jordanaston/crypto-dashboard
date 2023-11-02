import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoData } from "../types/CryptoDataTypes";
import CryptoCard from "../components/CryptoCard";

type Props = {
  selectedTokens: CryptoData[];
  removeToken: (token: CryptoData) => void;
};

const MyTokensPage: React.FC<Props> = ({ selectedTokens, removeToken }) => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/")}
          className="mr-4 px-4 py-2 border rounded"
        >
          Go to Tokens Page
        </button>
      </div>
      <div className="flex justify-center my-8">MY TOKENS</div>
      {selectedTokens.map((token) => (
        <div key={token.id} className="flex justify-center items-center">
          <CryptoCard crypto={token} onClick={() => {}} />
          <button
            onClick={() => removeToken(token)}
            className="ml-2 px-3 py-1 border rounded"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyTokensPage;
