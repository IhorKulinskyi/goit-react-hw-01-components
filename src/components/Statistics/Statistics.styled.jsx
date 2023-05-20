import styled from '@emotion/styled';

export const Container = styled.section`
  display: inline-block;
  text-align: center;
  border: 1px solid lightgray;
  background: #eaf2f5;
  padding: 12px 0 0;

  margin-bottom: 40px;
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsListItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 8px;
  background-color: ${getRandomHexColor};
`;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
