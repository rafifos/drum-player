import { createContext } from "react";

interface GlobalContextProps {
  files: string[];
  selectedSamples: string[];
  bpm: number;
}

const defaultValue = {
  files: [],
  selectedSamples: [],
  bpm: 0,
};

const GlobalContext = createContext<Partial<GlobalContextProps>>({});

export default GlobalContext;
export { defaultValue };
