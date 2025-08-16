import { createContext } from "react";
import type { ItemsI } from "../../pages/task2/interface";

// Define the shape of your context data
interface TransactionContextType {
  data: ItemsI[];            // example data type
  setData: React.Dispatch<React.SetStateAction<ItemsI[]>>;
  isCartOpen: boolean;
  setcartOpen:React.Dispatch<React.SetStateAction<boolean>>
}

// Create context with default value (you can use {} as placeholder but type must allow it)
export const TransactionContext = createContext<TransactionContextType | undefined>(undefined);