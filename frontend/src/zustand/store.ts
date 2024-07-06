import { create } from "zustand";

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

interface contentProps {
  id: number;
  title: string;
  body: string;
  tags?: string[];
  images?: string[];
  date: string;
}

interface contentState {
  contentsArray: contentProps[];
  setContentsArray: (value: contentProps[]) => void;
}

export const storedContentArray = create<contentState>((set) => ({
  contentsArray: [],
  setContentsArray: (value) => set({ contentsArray: value }),
}));
