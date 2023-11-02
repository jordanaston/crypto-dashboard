import React from "react";
import { useNavigate } from "react-router-dom";
import { CryptoData } from "../types/Types";
import CryptoCard from "../components/CryptoCard";

type Props = {
  selectedTokens: CryptoData[];
  removeToken: (token: CryptoData) => void;
};

const MyTokensPage: React.FC<Props> = ({ selectedTokens, removeToken }) => {
  const navigate = useNavigate();

  return (
    <div className="pb-20">
      <div className="flex justify-center mt-8 mb-2 text-white">MY TOKENS</div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/")}
          className="my-4 px-4 py-2 border rounded text-white"
        >
          Go to Tokens Page
        </button>
      </div>

      {selectedTokens.map((token) => (
        <div key={token.id} className="flex justify-center items-center">
          <CryptoCard crypto={token} onClick={() => {}} logo={token.logo} />
          <button
            onClick={() => removeToken(token)}
            className="ml-2 px-3 py-1 border rounded text-white"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default MyTokensPage;
