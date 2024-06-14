import React, { useState } from 'react';
import useTransactions from '../hooks/useTransactions';
import DataTableComponent from '../components/DataTableComponent';
import FilterComponent from '../components/FilterComponent';
import { calculateRewards } from '../utils/calculateRewards';

const Rewards = () => {
  const transactions = useTransactions();
  const [searchTerm, setSearchTerm] = useState('');
  const [customerIdFilter, setCustomerIdFilter] = useState([]);

  const data = transactions.map(transaction => {
    const dateObj = new Date(transaction.date);
    return {
      ...transaction,
      month: dateObj.toLocaleString('default', { month: 'long' }),
      monthYear: `${dateObj.getFullYear()}-${dateObj.getMonth() + 1}`,
      day: dateObj.getDate(),
      fullDate: dateObj.toLocaleDateString(),
    };
  });

  const uniqueCustomerIds = [...new Set(data.map(transaction => transaction.customerId))].map(id => ({
    value: id,
    label: `Customer ID: ${id}`
  }));

  const filteredData = data.filter(
    item =>
      (customerIdFilter.length === 0 || customerIdFilter.some(filter => filter.value === item.customerId)) &&
      (item.amount.toString().includes(searchTerm.toLowerCase()) ||
      item.month.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.fullDate.toLowerCase().includes(searchTerm.toLowerCase()) ||
      calculateRewards(item.amount).toString().includes(searchTerm.toLowerCase()))
  ).sort((a, b) => a.customerId - b.customerId);

  const groupedData = filteredData.reduce((acc, transaction) => {
    const points = calculateRewards(transaction.amount);
    if (!acc[transaction.customerId]) {
      acc[transaction.customerId] = { months: {}, totalPoints: 0 };
    }
    if (!acc[transaction.customerId].months[transaction.monthYear]) {
      acc[transaction.customerId].months[transaction.monthYear] = { transactions: [], totalPoints: 0 };
    }
    acc[transaction.customerId].months[transaction.monthYear].transactions.push(transaction);
    acc[transaction.customerId].months[transaction.monthYear].totalPoints += points;
    acc[transaction.customerId].totalPoints += points;
    return acc;
  }, {});

  const rows = [];
  Object.keys(groupedData).forEach(customerId => {
    const customerData = groupedData[customerId];
    Object.keys(customerData.months).forEach(monthYear => {
      customerData.months[monthYear].transactions.forEach(transaction => {
        rows.push(transaction);
      });
      rows.push({
        customerId,
        amount: '',
        month: '',
        fullDate: 'Total Points for Month',
        points: customerData.months[monthYear].totalPoints,
      });
    });
    rows.push({
      customerId,
      amount: '',
      month: '',
      fullDate: 'Overall Total Points',
      points: customerData.totalPoints,
    });
  });

  const columns = [
    {
      name: 'Customer ID',
      selector: 'customerId',
      sortable: false,
      cell: row => (
        <div className="p-4">{row.fullDate.includes('Total Points') ? '' : row.customerId}</div>
      ),
    },
    {
      name: 'Amount',
      selector: 'amount',
      sortable: false,
      cell: row => (
        <div className="p-4">{row.amount}</div>
      ),
    },
    {
      name: 'Month',
      selector: 'month',
      sortable: false,
      cell: row => (
        <div className="p-4">{row.month}</div>
      ),
    },
    {
      name: 'Date',
      selector: 'fullDate',
      sortable: false,
      cell: row => (
        <div className="p-4">{row.fullDate}</div>
      ),
    },
    {
      name: 'Points',
      cell: row => (
        <div className="p-4">{row.points !== undefined ? row.points : calculateRewards(row.amount)}</div>
      ),
      sortable: false,
    },
  ];

  const customerColors = ['#e0f7fa', '#ffe0b2', '#c8e6c9', '#ffccbc', '#d1c4e9', '#f0f4c3'];

  return (
    <div className="p-6 bg-sky-700 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-white text-center">
          Rewards Providing System
        </h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <FilterComponent
            uniqueCustomerIds={uniqueCustomerIds}
            customerIdFilter={customerIdFilter}
            setCustomerIdFilter={setCustomerIdFilter}
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
          {customerIdFilter.length === 0 ? (
            <div className="text-center text-red-600 font-bold">
              Please select a customer ID to view data.
            </div>
          ) : (
            <DataTableComponent
              rows={rows}
              customerIdFilter={customerIdFilter}
              columns={columns}
              customerColors={customerColors}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Rewards;
