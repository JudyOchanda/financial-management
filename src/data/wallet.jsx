const walletsData = [
  {
    id: 1,
    name: "Wallet 1",
    initialBalance: "100,000",
    currency: "KES",
  },
  {
    id: 2,
    name: "Wallet 2",
    initialBalance: "50,000",
    currency: "KES",
  },
  {
    id: 3,
    name: "Wallet 3",
    initialBalance: "40,000",
    currency: "KES",
  },
  {
    id: 3,
    name: "Wallet 4",
    initialBalance: "30,000",
    currency: "KES",
  },
];

const transactionsType = [
  {
    id: 1,
    name: "Income",
    category: [
      {
        id: 1,
        name: "Salary",
      },
      {
        id: 2,
        name: "Interest",
      },
      {
        id: 3,
        name: "Award",
      },
      {
        id: 4,
        name: "Other Incomes",
      },
    ],
  },
  {
    id: 2,
    name: "Expenses",
    category: [
      {
        id: 1,
        name: "Food",
      },
      {
        id: 2,
        name: "Bill",
      },
      {
        id: 3,
        name: "Transport",
      },
      {
        id: 4,
        name: "Rent",
      },
    ],
  },
  {
    id: 3,
    name: "Debt",
    category: [
      {
        id: 1,
        name: "Lend",
      },
      {
        id: 2,
        name: "Repayment",
      },
      {
        id: 3,
        name: "Borrow",
      },
      {
        id: 4,
        name: "Debt Collection",
      },
    ],
  },
];

const transactionsData = [
  {
    id: 1,
    wallet: walletsData[0],
    type: transactionsType[0],
    category: transactionsType[0].category[0],
    amount: 10000,
  },
  {
    id: 2,
    wallet: walletsData[0],
    type: transactionsType[1],
    category: transactionsType[1].category[3],
    amount: 10000,
  },
  {
    id: 3,
    wallet: walletsData[1],
    type: transactionsType[2],
    category: transactionsType[2].category[1],
    amount: 4000,
  },
];

export { walletsData, transactionsType, transactionsData };
