export const getDashboardStats = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        totalOrders: 1240,
        revenue: 45000,
        customers: 320,
        growth: 12,
      });
    }, 1000);
  });
};