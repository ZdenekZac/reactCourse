import styled from 'styled-components';
import Heading from './Heading';

const StyledHeader = styled.header`
  border: 1px solid var(--color-sky-600);
  color: var(--color-amber-600);
  background-color: var(--color-sky-200);
`;

function Header() {
  return (
    <StyledHeader>
      <Heading as='h3'>Header</Heading>
    </StyledHeader>
  );
}

export default Header;
