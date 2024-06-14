import React from 'react';
import DataTable from 'react-data-table-component';
import { calculateRewards } from '../utils/calculateRewards';

const DataTableComponent = ({ rows, customerIdFilter, columns, customerColors }) => {
  const conditionalRowStyles = [
    {
      when: row => customerIdFilter.length > 1 && row.amount !== '',
      style: (row, index) => {
        const customerIndex = customerIdFilter.findIndex(filter => filter.value === row.customerId);
        const backgroundColor = customerColors[customerIndex % customerColors.length];
        return {
          backgroundColor: backgroundColor,
          borderBottomColor: '#d1d5db',
          borderBottomWidth: '1px',
          borderBottomStyle: 'solid',
        };
      }
    },
    {
      when: row => row.amount === '',
      style: {
        backgroundColor: '#f8f9fa',
        fontWeight: 'bold',
        textAlign: 'center',
      },
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={rows}
      customStyles={{
        headRow: {
          style: {
            backgroundColor: '#4a5568',
            color: 'white',
            borderTopLeftRadius: '0.5rem',
            borderTopRightRadius: '0.5rem',
          },
        },
        headCells: {
          style: {
            backgroundColor: '#2d3748',
            color: 'white',
            fontSize: '0.875rem',
          },
        },
        rows: {
          style: {
            minHeight: '3rem',
          },
          highlightOnHoverStyle: {
            backgroundColor: 'transparent',
          },
        },
      }}
      conditionalRowStyles={conditionalRowStyles}
      noHeader
    />
  );
};

export default DataTableComponent;
