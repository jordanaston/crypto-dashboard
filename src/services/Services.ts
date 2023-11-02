import axios from "axios";

const apiKEY = import.meta.env.VITE_API_KEY;

const baseURL = "https://pro-api.coinmarketcap.com/v1";

const cmcApi = axios.create({
  baseURL: baseURL,
  headers: {
    "X-CMC_PRO_API_KEY": apiKEY,
  },
});

export const getCryptoInfo = async (cryptoId: number) => {
  try {
    const response = await cmcApi.get(`/cryptocurrency/info?id=${cryptoId}`);
    console.log(JSON.stringify(response, null, 3));
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getCryptoListings = async () => {
  try {
    const response = await cmcApi.get(
      "/cryptocurrency/listings/latest?limit=20"
    );
    console.log(JSON.stringify(response, null, 3));
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
