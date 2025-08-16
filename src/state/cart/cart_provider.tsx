// TransactionContext.tsx
import React, { useState, type ReactNode } from 'react';
import type { ItemsI } from '../../pages/task2/interface';
import { CartContext } from './cart_content';



interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionProvider: React.FC<TransactionProviderProps> = ({ children }) => {
  const [data, setData] = useState<ItemsI[]>([]);
    const [isCartOpen, setcartOpen] = useState(false);

  return (
    <CartContext.Provider value={{ data, setData, isCartOpen,setcartOpen }}>
      {children}
    </CartContext.Provider>
  );
};
