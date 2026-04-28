import styled from 'styled-components';

const StyledLogo = styled.div`
  text-align: center;
`;

const Img = styled.img`
  height: 11.6rem;
  width: auto;
  border-radius: 10%;
`;

function Logo() {
  return (
    <StyledLogo>
      <Img src="/logovw.png" alt="logo" />
    </StyledLogo>
  );
}

export default Logo;
