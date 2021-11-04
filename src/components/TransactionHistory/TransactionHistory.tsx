import './TransactionHistory.css';

type  Items = {
  id: string;
  type: string;
  amount: string;
  currency: string;
};

interface Props {
  items: Items[];
  initialOptionPos?: number;
}

export const TransactionHistory = ({ items }:Props) => {
  return (
    <div className="Container">
    <table className="TransactionHistory">
      <thead className="Head">
        <tr >
          <th className="Column">Type</th>
          <th className="Column">Amount</th>
          <th className="Column">Currency</th>
        </tr>
      </thead>
      <tbody className="Body">
        {items.map(item => (
          <tr className="Trow" key={item.id}>
            <td className="Tcolumn">{item.type}</td>
            <td className="Tcolumn">{item.amount}</td>
            <td className="Tcolumn">{item.currency}</td>
          </tr> 
        ))}
      </tbody>
    </table>
        </div>

  );
};


