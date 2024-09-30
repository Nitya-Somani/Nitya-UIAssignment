# Rewards Providing System

This project is a React application designed to provide a system for tracking and displaying rewards points for customers based on their transaction history.

# Live Link
# https://retailer-repo.vercel.app/

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
- [Utils](#utils)
- [API](#api)
- [Hooks](#hooks)
- [Styling](#styling)
- [Credits](#credits)

## Overview

The Rewards Providing System is a web application that allows users to filter transactions by customer ID and search for specific transactions. It displays the transactions in a table format, calculating the rewards points for each transaction.

## Features

- Fetch transactions from an API.
- Filter transactions by customer ID.
- Search transactions by amount, month, date, and calculated rewards points.
- Display transactions in a paginated table.
- Calculate and display rewards points.

## Project Structure

src/
├── api/
│ └── fetchTransactions.js

├── components/
│ ├── DataTableComponent.js
│ └── FilterComponent.js

├── hooks/
│ └── useTransactions.js

├── pages/
│ └── Rewards.js

├── utils/
│ └── calculateRewards.js

├── App.js
└── index.js


## Installation

1. Clone the repository:

```bash
    git clone https://github.com/yourusername/rewards-providing-system.git

2. Navigate to the project directory:

    cd rewards-providing-system

3. Install the dependencies:
    
    npm install

Usage
1. Start the development server:

    npm start

2. Open your browser and navigate to:

    http://localhost:3000
    
    Components
DataTableComponent
A component to display the transactions in a table format with conditional row styling.

Props:

rows: Array of transaction data.
customerIdFilter: Array of selected customer IDs for filtering.
columns: Array of column definitions for the table.
customerColors: Array of colors for styling rows based on customer ID.
FilterComponent
A component to provide filtering and searching functionality.

Props:

uniqueCustomerIds: Array of unique customer IDs.
customerIdFilter: Array of selected customer IDs for filtering.
setCustomerIdFilter: Function to update the customer ID filter.
searchTerm: String representing the current search term.
setSearchTerm: Function to update the search term.
Utils
calculateRewards.js
A utility function to calculate rewards points based on the transaction amount.

Function:

calculateRewards(amount): Returns the calculated rewards points for a given amount.
API
fetchTransactions.js
A mock API call to fetch transactions. Replace with actual API call in a real-world scenario.

Function:

fetchTransactions(): Returns a promise that resolves to an array of transaction data.
Hooks
useTransactions.js
A custom hook to fetch and manage transaction data.

Function:

useTransactions(): Returns an array of transactions fetched from the API.
Styling
The application uses Tailwind CSS for styling. Custom styles are applied to the DataTable component to enhance the user interface.

This project was created by Nitya Somani



This README provides a detailed overview of the project, including installation instructions, usage details, and an explanation of the different components and their functionalities.  🖥️👾
