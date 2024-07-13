import { create } from "zustand";
import { contentProps } from "../../types";

interface TokenProps {
  tokenBlogAy: string;
  setToken: (value: string) => void;
}
// Buat function dan initial statenya
export const useTokenStored = create<TokenProps>((set) => ({
  tokenBlogAy: "",
  setToken: (value) => {
    set({ tokenBlogAy: value });
  },
}));


interface contentState {
  contentsArray: contentProps[];
  setContentsArray: (value: contentProps[]) => void;
}

export const storedContentArray = create<contentState>((set) => ({
  contentsArray: [],
  setContentsArray: (value) => set({ contentsArray: value }),
}));
