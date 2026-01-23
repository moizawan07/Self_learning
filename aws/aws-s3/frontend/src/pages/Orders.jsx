import { useEffect, useState } from "react";

const orders = [
  {
    id: "ORD-1001",
    customerName: "Ali Khan",
    email: "ali.khan@example.com",
    product: "Wireless Headphones",
    quantity: 1,
    price: 8500,
    status: "Pending",
    orderDate: "2025-01-10",
  },
  {
    id: "ORD-1002",
    customerName: "Sara Ahmed",
    email: "sara.ahmed@example.com",
    product: "Smart Watch",
    quantity: 2,
    price: 12000,
    status: "Completed",
    orderDate: "2025-01-12",
  },
  {
    id: "ORD-1003",
    customerName: "Usman Raza",
    email: "usman.raza@example.com",
    product: "Laptop Bag",
    quantity: 1,
    price: 3500,
    status: "Cancelled",
    orderDate: "2025-01-14",
  },
  {
    id: "ORD-1004",
    customerName: "Ayesha Noor",
    email: "ayesha.noor@example.com",
    product: "Bluetooth Speaker",
    quantity: 3,
    price: 4500,
    status: "Pending",
    orderDate: "2025-01-15",
  },
  {
    id: "ORD-1005",
    customerName: "Bilal Hussain",
    email: "bilal.hussain@example.com",
    product: "Mechanical Keyboard",
    quantity: 1,
    price: 15000,
    status: "Completed",
    orderDate: "2025-01-18",
  },
];

function Orders() {
  const [filterOrders, setFilterOrder] = useState(orders);
  const [productName, setProductName] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      const filter = orders.filter(
        (order) =>
          order.product
            .toLocaleLowerCase()
            .includes(productName.toLocaleLowerCase()) ||
          order.customerName
            .toLocaleLowerCase()
            .includes(productName.toLocaleLowerCase()),
      );

      setFilterOrder(filter);
    }, 500);

    return () => clearTimeout(timer);
  }, [productName]);

  return (
    <div>
      <div>
        <h1>Filter Options</h1>

        <input
          type="text"
          placeholder="product Name"
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <table>
        <tr>
          <th>Id</th>
          <th>Customer Name</th>
          <th>Customer email</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>price</th>
          <th>Status</th>
          <th>Date</th>
        </tr>
        {filterOrders.map((row) => (
          <tr>
            <td>{row.id}</td>
            <td>{row.customerName}</td>
            <td>{row.email}</td>
            <td>{row.product}</td>
            <td>{row.quantity}</td>
            <td>{row.price}</td>
            <td>{row.status}</td>
            <td>{row.orderDate}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default Orders;
