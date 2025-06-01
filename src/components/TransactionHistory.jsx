import { transactions } from "../components/UserData.jsx";
const limitedTrans = transactions.slice(0, 3);

const transactionHistory = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-header">Type</th>
          <th className="table-header">Amount</th>
          <th className="table-header">Date</th>
          <th className="table-header">Status</th>
          <th className="table-header">Method</th>
        </tr>
      </thead>
      <tbody>
        {limitedTrans.map((trans, index) => (
          <tr key={index}>
            <td className="table-column">
              {trans.type ? "Deposit" : "Withdrawal"}
            </td>
            <td className="table-column">{trans.amount}</td>
            <td className="table-column">{trans.date}</td>
            <td className="table-column">{trans.status[1]}</td>
            <td className="table-column">{trans.method[0]}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default transactionHistory;
