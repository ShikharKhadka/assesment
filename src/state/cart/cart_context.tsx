// TransactionContext.tsx
import React, { useState, type ReactNode } from 'react';
import { TransactionContext } from './cart_content';
import type { ItemsI } from '../../pages/task2/interface';



// Provider component
interface TransactionProviderProps {
  children: ReactNode;
}

export const TransactionProvider: React.FC<TransactionProviderProps> = ({ children }) => {
  const [data, setData] = useState<ItemsI[]>([]);
    const [isCartOpen, setcartOpen] = useState(false);

  return (
    <TransactionContext.Provider value={{ data, setData, isCartOpen,setcartOpen }}>
      {children}
    </TransactionContext.Provider>
  );
};
