function OrdersTable({ orders, onSelectOrder }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm overflow-x-auto">

      <h2 className="text-lg font-semibold mb-4">
        Recent Orders
      </h2>

      <table className="w-full text-left min-w-[600px]">

        <thead>
          <tr className="border-b text-gray-500">
            <th className="p-3">Order ID</th>
            <th className="p-3">Customer</th>
            <th className="p-3">Amount</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>

        <tbody>

          {orders.map((order) => (
            <tr
              key={order.id}
              onClick={() => onSelectOrder(order)}
              className="border-b hover:bg-gray-50 cursor-pointer transition"
            >

              <td className="p-3">{order.id}</td>
              <td className="p-3">{order.customer}</td>
              <td className="p-3">₹{order.amount}</td>

              {/* STATUS */}
              <td className="p-3">
                <span
                  className={`
                    inline-flex items-center px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap
                    ${
                      order.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-red-100 text-red-700"
                    }
                  `}
                >
                  {order.status}
                </span>
              </td>

            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default OrdersTable;