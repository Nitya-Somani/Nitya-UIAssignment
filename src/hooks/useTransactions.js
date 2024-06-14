import { useState, useEffect } from 'react';
import { fetchTransactions } from '../api/fetchTransactions';

const useTransactions = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const loadTransactions = async () => {
      const data = await fetchTransactions();
      setTransactions(data);
    };
    loadTransactions();
  }, []);

  return transactions;
};

export default useTransactions;
