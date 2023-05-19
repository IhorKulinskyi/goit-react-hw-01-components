import styled from '@emotion/styled';

export const Card = styled.div`

  text-align: center;

  border: 0.5px solid lightgrey;
  width: calc(100% / 4);
  border-radius: 4px;
`;

export const Description = styled.div`
  padding: 24px 0;
`;

export const ProfileImg = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 12px;
  border-radius: 50%;
  background-color: lightblue;
`;

export const UserName = styled.p`
  font-weight: 700;
  margin-bottom: 8px;
`;

export const Tag = styled.p`
  margin-bottom: 8px;
`;

export const StatList = styled.ul`
  display: flex;
  width: 100%;
`;

export const StatListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  border: 0.5px solid lightgray;
  padding: 12px 4px;
  background-color: #f3f6f9;

  width: calc(100% / 3);

  gap: 4px;
`;
