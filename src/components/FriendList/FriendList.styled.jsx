import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  border: 2px dashed black;
  padding: 16px;
  max-width: fit-content;
  margin-bottom: 40px;
`;

export const ListItem = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 4px;

  border: 1px solid lightgray;
  background-color: #f1f1f1;
  padding: 8px 24px 8px 8px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Chip = styled.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: ${({ type }) => {
    if (type) {
      return 'green';
    } else {
      return 'red';
    }
  }};
`;
