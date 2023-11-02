import axios from "axios";
import { CryptoData, CryptoInfoResponse } from "../types/Types";

const apiKEY = import.meta.env.VITE_API_KEY;

const baseURL = "https://pro-api.coinmarketcap.com/v1";

const cmcApi = axios.create({
  baseURL: baseURL,
  headers: {
    "X-CMC_PRO_API_KEY": apiKEY,
  },
});

export const getCryptoListings = async (): Promise<CryptoData[]> => {
  try {
    const response = await cmcApi.get(
      "/cryptocurrency/listings/latest?limit=20"
    );
    return response.data.data;
  } catch (error) {
    throw error;
  }
};

export const getCryptoInfo = async (
  cryptoId: number
): Promise<CryptoInfoResponse> => {
  try {
    const response = await cmcApi.get(`/cryptocurrency/info?id=${cryptoId}`);
    return response.data;
  } catch (error) {
    throw error;
  }
};
