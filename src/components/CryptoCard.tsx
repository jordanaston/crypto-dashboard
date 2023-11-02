import React from "react";
import { CryptoData } from "../types/CryptoDataTypes";

type Props = {
  crypto: CryptoData;
  onClick: () => void;
};

const CryptoCard: React.FC<Props> = ({
  crypto,
  onClick,
}: Props): JSX.Element => {
  return (
    <div className="flex justify-center hover:opacity-70" onClick={onClick}>
      <div className="flex items-center space-x-3 my-2 p-2 w-[366px] h-[56px] rounded-md bg-[gray] text-white transition-opacity duration-300 cursor-pointer">
        <div className="font-bold text-lg">#{crypto.cmc_rank}</div>
        <div className="font-semibold">{crypto.symbol}</div>
        {crypto.quote && crypto.quote.USD && (
          <>
            <div className="text-xs">
              FD Market Cap: $
              {crypto.quote.USD.fully_diluted_market_cap.toLocaleString()}
            </div>
            <div className="text-sm">
              Price: $
              {crypto.quote.USD.price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CryptoCard;
