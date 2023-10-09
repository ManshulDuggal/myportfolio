import { create } from "zustand";
interface GenerationState {
  isLoading: boolean;
  setIsloading: (isLoading: boolean) => void;
  language: string;
  setLanguage: (language: string) => void | [];
}

export const useGenerationStore = create<GenerationState>()((set) => ({
  language: "en",
  isLoading: false,
  setIsloading: (isLoading: boolean) => set({ isLoading }),
  setLanguage: (language: string) => set({ language }),
}));
