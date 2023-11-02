import { getCryptoInfo, getCryptoListings } from "../services/Services";
import { useQueries, useQuery } from "react-query";
import CryptoCard from "./CryptoCard";
import { CryptoData, CryptoInfoResponse } from "../types/Types";

type Props = {
  onTokenClick: (token: CryptoData, logoUrl?: string) => void;
};

const CryptoList: React.FC<Props> = ({ onTokenClick }: Props): JSX.Element => {
  const {
    data: cryptoListings,
    isError: isCryptoListingsError,
    isLoading: isCryptoListingsLoading,
  } = useQuery("cryptoListings", getCryptoListings, {
    staleTime: Infinity,
    cacheTime: Infinity,
  });

  const cryptoInfo = useQueries(
    cryptoListings?.map((crypto: CryptoData) => ({
      queryKey: ["cryptoInfo", crypto.id],
      queryFn: () => getCryptoInfo(crypto.id),
      staleTime: Infinity,
      cacheTime: Infinity,
    })) || []
  );

  if (isCryptoListingsError) {
    return (
      <div className="text-white flex justify-center items-center">
        Error fetching tokens!
      </div>
    );
  }
  if (isCryptoListingsLoading || cryptoInfo.some((info) => info.isLoading)) {
    return (
      <div className="text-white flex justify-center items-center">
        Loading Tokens...
      </div>
    );
  }

  const renderCryptoList = () => {
    return (
      cryptoListings &&
      cryptoListings.map((crypto: CryptoData, index: number) => {
        const cryptoLogo = (cryptoInfo[index]?.data as CryptoInfoResponse)
          ?.data?.[crypto.id]?.logo;

        return (
          <CryptoCard
            key={crypto.id}
            crypto={crypto}
            logo={cryptoLogo}
            onClick={() => onTokenClick(crypto, cryptoLogo)}
          />
        );
      })
    );
  };

  return <div>{renderCryptoList()}</div>;
};

export default CryptoList;
