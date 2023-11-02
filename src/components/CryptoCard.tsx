import React from "react";
import { CryptoData } from "../types/Types";
import {
  formatMarketCap,
  formatToTwoDecimalPlaces,
} from "../utils/FormatFiguresUtils";
import PercentArrow from "../assets/svg/PercentArrow";

type Props = {
  crypto: CryptoData;
  onClick: () => void;
  logo?: string;
};

const CryptoCard: React.FC<Props> = ({
  crypto,
  onClick,
  logo,
}: Props): JSX.Element => {
  const isNegative = crypto.quote?.USD.percent_change_7d! < 0;

  return (
    <div className="flex justify-center" onClick={onClick}>
      <div className="flex items-center justify-between my-2 px-4 p-2 w-[400px] h-[65px] rounded-md bg-[#2f2e2e] text-white transition-transform duration-100 cursor-pointer transform active:scale-95 active:translate-y-[2px] hover:opacity-70">
        <div className="text-xs ml-2">#{crypto.cmc_rank}</div>
        <img src={logo} alt={`${crypto.symbol} logo`} className="w-8 h-8" />
        <div>
          <div className="font-semibold">{crypto.symbol}</div>
          {crypto.quote && (
            <>
              <div className="text-xs text-[#707070]">
                {formatMarketCap(crypto.quote.USD.fully_diluted_market_cap)}
              </div>
            </>
          )}
        </div>

        {crypto.quote && (
          <div className="text-sm font-bold min-w-[60px] justify-center flex">
            {crypto.quote.USD.price.toLocaleString("en-US", {
              style: "currency",
              currency: "USD",
            })}
          </div>
        )}

        <div
          className={`flex flex-row text-xs ml-4 ${
            isNegative ? "bg-[#FF0000]" : "bg-[#24FF00]"
          } bg-opacity-10 rounded-md p-[2px] px-[4px]`}
        >
          <div
            className={
              isNegative ? "rotate-[180deg] mb-[4.5px] mr-1" : "mt-[4.5px] mr-1"
            }
          >
            <PercentArrow color={isNegative ? "#FF0000" : "#24FF00"} />
          </div>
          <div
            className={` ${
              isNegative ? "text-[#FF0000]" : "text-[#24FF00]"
            } font-bold `}
          >
            {formatToTwoDecimalPlaces(crypto.quote?.USD?.percent_change_7d)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default CryptoCard;
