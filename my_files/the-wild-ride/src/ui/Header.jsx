import styled from 'styled-components';
import Heading from './Heading';

const StyledHeader = styled.header`
  border: 0.5px solid var(--color-grey-100);
  color: var(--color-grey-500);
  background-color: var(--color-emerald-200);
  text-align: center;
`;

function Header() {
  return (
    <StyledHeader>
      <Heading as="h3">Header</Heading>
    </StyledHeader>
  );
}

export default Header;
