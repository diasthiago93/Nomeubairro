import { createContext, useEffect, useState } from "react";
import { onLoadList } from "../service/listService";

export interface AnchorContextData {
  listData: any;
  setlistData: any;
}

export const AnchorContext = createContext<AnchorContextData>(
  {} as AnchorContextData
);

const AnchorProvider: React.FC = ({ children }) => {
  const [listData, setlistData] = useState("");

  useEffect(() => {
    onLoadList(setlistData);
  }, []);

  return (
    <AnchorContext.Provider value={{ listData, setlistData }}>
      {children}
    </AnchorContext.Provider>
  );
};

export default AnchorProvider;
