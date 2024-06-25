import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  flex: 1;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: var(--bgColor);
  max-width: var(--large);
`;
export const ContainerVh = styled(Container)`
  height: 100vh;
`;
