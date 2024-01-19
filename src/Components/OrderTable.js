import React from 'react';
import '../Style/orderTable.css';
const OrderTable = ({ data }) => {
  return (
    <>
    <div className='table-container'>
    <table className='order-table-container'>
      <thead>
        <tr>
          <th className="table-header">Customer Name</th>
          <th className="table-header">Restaurant</th>
          <th className="table-header">Surplus Dish</th>
          <th className="table-header">Bill Amount</th>
          <th className="table-header">Booking Amount</th>
          <th className="table-header">ETA Customer</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((row, index) => (
          <tr key={index}>
            <td className="table-data">{row.customerName}</td>
            <td className="table-data">{row.restaurant}</td>
            <td className="table-data">{row.surplusDish}</td>
            <td className="table-data">{row.billAmount}</td>
            <td className="table-data">{row.bookingAmount}</td>
            <td className="table-data">{row.etaCustomer}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
    </>
  );
};

export default OrderTable;
