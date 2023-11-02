import { create } from "zustand";
import { CryptoData } from "../types/Types";

export interface Store {
  selectedTokens: CryptoData[];
  addToMyTokens: (token: CryptoData, logoUrl?: string) => void;
  handleRemoveToken: (tokenToRemove: CryptoData) => void;
}

export const useStore = create<Store>((set) => ({
  selectedTokens: JSON.parse(localStorage.getItem("selectedTokens") || "[]"),
  addToMyTokens: (token, logoUrl) =>
    set((prev) => {
      if (!prev.selectedTokens.some((t) => t.id === token.id)) {
        token.logo = logoUrl;
        const updatedTokens = [...prev.selectedTokens, token];
        localStorage.setItem("selectedTokens", JSON.stringify(updatedTokens));
        return { selectedTokens: updatedTokens };
      }
      return prev;
    }),
  handleRemoveToken: (tokenToRemove) =>
    set((prev) => {
      const updatedTokens = prev.selectedTokens.filter(
        (token) => token.id !== tokenToRemove.id
      );
      localStorage.setItem("selectedTokens", JSON.stringify(updatedTokens));
      return { selectedTokens: updatedTokens };
    }),
}));
