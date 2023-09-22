import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { format } from 'date-fns';
import PropTypes from 'prop-types';

export const CryptoHistory = ({ items }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {items.map(({ id, price, amount, date }) => {
          return (
            <Tr>
              <Td>{id}</Td>
              <Td>{price}</Td>
              <Td>{amount}</Td>
              <Td>{format(new Date(date), 'Pp')}</Td>
            </Tr>
          );
        })}
      </tbody>
    </BaseTable>
  );
};

CryptoHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};
