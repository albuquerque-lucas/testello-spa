import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Customers = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
    { id: 3, name: 'Alice Johnson' },
  ]);

  const handleEdit = (id: number) => {
    alert(`Edit customer with id: ${id}`);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this customer?')) {
      setCustomers(customers.filter(customer => customer.id !== id));
    }
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">Customers Dashboard</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th className="text-end">Actions</th>
          </tr>
        </thead>
        <tbody>
          {
            customers.map((customer) => (
              <tr key={customer.id}>
                <td>{customer.id}</td>
                <td>{customer.name}</td>
                <td className="text-end">
                  <button
                    className="btn btn-primary me-2"
                    onClick={() => handleEdit(customer.id)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(customer.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Customers;
