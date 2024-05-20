import styled from 'styled-components';

export const Main = styled.main`
  max-width: 1320px;
  margin: 25px auto;
  padding: 15px 16px 15px 16px;

  @media (min-width: 768px) {
    padding: 0px 24px 0px 24px;
  }

  @media (min-width: 1320px) {
    padding: 0px 30px 0px 30px;
  }
`;

export const CardGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 16px;
  margin: 0px;
  padding: 0;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }

  @media (min-width: 1380px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 24px;
  }
`;