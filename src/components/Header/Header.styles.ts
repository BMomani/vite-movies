import styled from 'styled-components';

export const Wrapper = styled.div`
  background: black;
  padding: 0 20px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;

`;

export const TMDBLogoImg = styled.img`
  width: 150px;
  @media screen and (max-width: 500px) {
    width: 80px;
  }
`;