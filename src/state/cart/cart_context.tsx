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
  const cartOnClick = () => { };
  return (
    <TransactionContext.Provider value={{ data, setData, cartOnClick }}>
      {children}
    </TransactionContext.Provider>
  );
};
