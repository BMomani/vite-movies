import styled from 'styled-components';

type Props = {
  image: string,
}

export const Wrapper = styled.div<Props>`
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 40%)), url({image});
  background-size: cover;
  width: 100%;
  height: 600px;
  position: relative;
  color: white;
`;

export const Content = styled.div`
  position: absolute;
  bottom: 100px;
  padding: 20px 0;

`;

export const Text = styled.div`
  
  padding: 20px 0;

`;