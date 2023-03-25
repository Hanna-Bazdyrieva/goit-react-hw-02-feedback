import styled from 'styled-components';

const ContainerStyled = styled.div`
  margin: ${p => p.theme.space[0]} auto;
  padding: ${p => p.theme.space[5]}px 0;
  max-width: ${p => p.theme.space[10]}px;
  height: 100vh;
  background-color: ${p => p.theme.colors.container};
`;

export default ContainerStyled;
