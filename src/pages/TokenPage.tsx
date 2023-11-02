import React from "react";
import CryptoList from "../components/CryptoList";
import { useNavigate } from "react-router-dom";
import { CryptoData } from "../types/Types";

type Props = {
  addToMyTokens: (token: CryptoData, logoUrl?: string) => void;
};

const TokenPage: React.FC<Props> = ({ addToMyTokens }: Props) => {
  const navigate = useNavigate();

  const handleTokenClick = (token: CryptoData, logoUrl?: string) => {
    addToMyTokens(token, logoUrl);
  };

  return (
    <div className="pb-20">
      <div className="flex justify-center mt-8 mb-2 text-white">TOKEN PAGE</div>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/mytokens")}
          className=" px-4 py-2 border rounded text-white my-4"
        >
          Go to My Tokens
        </button>
      </div>

      <CryptoList onTokenClick={handleTokenClick} />
    </div>
  );
};

export default TokenPage;
