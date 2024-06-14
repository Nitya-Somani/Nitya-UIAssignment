export const fetchTransactions = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { customerId: 1, amount: 120, date: '2024-01-15' },
        { customerId: 1, amount: 170, date: '2024-01-18' },       
        { customerId: 2, amount: 75, date: '2024-01-17' },
        { customerId: 2, amount: 175, date: '2024-01-13' },       
        { customerId: 1, amount: 200, date: '2024-02-05' },
        { customerId: 3, amount: 50, date: '2024-02-20' },
        { customerId: 3, amount: 150, date: '2024-02-21' },
        { customerId: 3, amount: 120, date: '2024-02-22' },       
        { customerId: 2, amount: 150, date: '2024-03-10' },
        { customerId: 3, amount: 90, date: '2024-03-15' },
        { customerId: 1, amount: 300, date: '2024-04-02' },
        { customerId: 2, amount: 60, date: '2024-04-18' },
        { customerId: 4, amount: 80, date: '2024-05-20' },
        { customerId: 1, amount: 130, date: '2024-06-05' },
        { customerId: 2, amount: 200, date: '2024-06-10' },
        { customerId: 4, amount: 75, date: '2024-06-25' }
      ]);
    }, 1000);
  });
};
