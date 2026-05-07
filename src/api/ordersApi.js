export const getOrders = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "ORD001",
          customer: "John Doe",
          amount: 1200,
          status: "Completed",
        },
        {
          id: "ORD002",
          customer: "Sara Khan",
          amount: 800,
          status: "Pending",
        },
        {
          id: "ORD003",
          customer: "Michael",
          amount: 1500,
          status: "Cancelled",
        },
        {
          id: "ORD004",
          customer: "Anjali",
          amount: 950,
          status: "Completed",
        },
      ]);
    }, 1000);
  });
};