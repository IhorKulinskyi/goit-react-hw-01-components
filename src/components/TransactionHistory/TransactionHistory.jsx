import PropTypes from 'prop-types';
import { Table, TableHead, TableRow, Td } from './TransactionHistory.styled';

export const TransactionHistory = ({ data }) => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHead>Type</TableHead>
          <TableHead>Amount</TableHead>
          <TableHead>Currency</TableHead>
        </TableRow>
      </thead>

      <tbody>
        {data.map(transaction => (
          <TableRow key={transaction.id}>
            <Td>{transaction.type}</Td>
            <Td>{transaction.amount}</Td>
            <Td>{transaction.currency}</Td>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
