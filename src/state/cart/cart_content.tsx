import { createContext } from "react";
import type { ItemsI } from "../../pages/task2/interface";

interface CartContextType {
  data: ItemsI[];
  setData: React.Dispatch<React.SetStateAction<ItemsI[]>>;
  isCartOpen: boolean;
  setcartOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const CartContext = createContext<CartContextType | undefined>(undefined);