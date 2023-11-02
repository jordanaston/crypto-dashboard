import React from "react";
import CryptoList from "../components/CryptoList";
import { useNavigate } from "react-router-dom";
import { CryptoData } from "../types/CryptoDataTypes";

type Props = {
  addToMyTokens: (token: CryptoData) => void;
};

const TokenPage: React.FC<Props> = ({ addToMyTokens }: Props) => {
  const navigate = useNavigate();

  const handleTokenClick = (token: CryptoData) => {
    addToMyTokens(token);
  };

  return (
    <div>
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/mytokens")}
          className="mr-4 px-4 py-2 border rounded"
        >
          Go to My Tokens
        </button>
      </div>

      <div className="flex justify-center my-8">TOKEN PAGE</div>
      <CryptoList onTokenClick={handleTokenClick} />
    </div>
  );
};

export default TokenPage;
