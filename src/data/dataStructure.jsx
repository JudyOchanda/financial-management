const user = {
  id: 1234,
  name: "Jane Doe",
  username: "janedoe",
  email: "jdoe@mail.com",
  phone: "+123456789",
  accountBalance: 0,
  transactions: [
    {
      id: 1,
      type: "Salary",
      amount: 50000,
    },
    {
      id: 2,
      type: "Business income",
      amount: 40000,
    },
  ],
  debts: [
    {
      id: 1,
      creditors: "Jude",
      amount: 10000,
      dueDate: "2024-10-20",
    },
    {
      id: 2,
      creditors: "Anne",
      amount: 5000,
      dueDate: "2024-10-20",
    },
  ],
  bills: [
    {
      id: 1,
      type: "Rent",
      amount: 10000,
    },
    {
      id: 2,
      type: "Food",
      amount: 10000,
    },
    {
      id: 3,
      type: "Transport",
      amount: 10000,
    },
  ],
};

export { user };
