import React from 'react';
import './TransactionHistory.css';

type  Items = {
  id: string;
  type: string;
  amount: string;
  currency: string;
};

interface Props {
  items: Items[];
  
}

export const TransactionHistory = ({ items }:Props) => {
  return (
    <table className="Container">
      <thead>
        <tr className="Title">
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <tr className="Label" key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};


