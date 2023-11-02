import { getCryptoListings } from "../services/Services";
import { useQuery } from "react-query";
import CryptoCard from "./CryptoCard";
import { CryptoData, CryptoInfo } from "../types/CryptoDataTypes";

type Props = {
  onTokenClick: (token: CryptoData) => void;
};

const CryptoList: React.FC<Props> = ({ onTokenClick }: Props): JSX.Element => {
  const { data: cryptoListings, isError: isCryptoListingsError } = useQuery(
    "cryptoListings",
    getCryptoListings
  );

  if (isCryptoListingsError) {
    console.log("ERROR: ", isCryptoListingsError);
  }

  console.log("Crypto Listings: ", JSON.stringify(cryptoListings, null, 3));

  const renderCryptoList = () => {
    return (cryptoListings || []).map((crypto: CryptoInfo) => {
      return (
        <CryptoCard
          key={crypto.id}
          crypto={crypto}
          onClick={() => onTokenClick(crypto)}
        />
      );
    });
  };

  return <div>{renderCryptoList()}</div>;
};

export default CryptoList;
