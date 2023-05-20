import styled from '@emotion/styled';

export const Table = styled.table`
  width: calc(100% / 2);
  border-collapse: collapse;
`;

export const TableHead = styled.th`
  background-color: lightblue;
  font-weight: bold;
  padding: 12px;
  text-align: center;
`;

export const Td = styled.td`
  padding: 8px;
  text-align: center;
`;

export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: #f9f9f9;
  }
  :hover {
    background-color: #e5e5e5;
  }
`;
