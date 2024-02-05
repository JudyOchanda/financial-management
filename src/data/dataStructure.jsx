// Utility function to find a type by ID
const findTypeById = (typeId) =>
  transactionsType.find((type) => type.id === typeId);

// Utility function to find a category by ID
const findCategoryById = (typeId, categoryId) => {
  const foundType = transactionsType.find((type) => type.id === typeId);
  return foundType
    ? foundType.category.find((cat) => cat.id === categoryId)
    : null;
};

// Utility function to find a wallet by ID
const findWalletById = (walletId) =>
  walletsData.find((wallet) => wallet.id === walletId);

const user = {
  id: 1234,
  name: "Jane Doe",
  username: "janedoe",
  email: "jdoe@mail.com",
  phone: "+123456789",
  wallets: [
    {
      wallet: findWalletById(1),
    },
    {
      wallet: findWalletById(2),
    },
  ],
};

const walletsData = [
  {
    id: 1,
    name: "Wallet 1",
    initialBalance: 100000,
    currency: "KES",
    user: user,
  },
  {
    id: 2,
    name: "Wallet 2",
    initialBalance: 50000,
    currency: "KES",
    user: user,
  },
  {
    id: 3,
    name: "Wallet 3",
    initialBalance: 40000,
    currency: "KES",
    user: user,
  },
  {
    id: 4,
    name: "Wallet 4",
    initialBalance: 30000,
    currency: "KES",
    user: user,
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
  // TODO: add transfer option
];

const transactionsData = [
  {
    id: 1,
    wallet: findWalletById(1),
    type: findTypeById(1),
    category: findCategoryById(1, 1),
    amount: 40000,
    dueDate: null,
  },
  {
    id: 2,
    wallet: findWalletById(1),
    type: findTypeById(2),
    category: findCategoryById(2, 4),
    amount: 10000,
    dueDate: "2024-03-02",
  },
  {
    id: 3,
    wallet: findWalletById(1),
    type: findTypeById(3),
    category: findCategoryById(3, 2),
    amount: 4000,
    dueDate: null,
  },
];

export { walletsData, transactionsType, transactionsData, user };
