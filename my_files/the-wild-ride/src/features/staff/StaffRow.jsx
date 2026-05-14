import styled from 'styled-components';

const StyledRow = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: start;
  padding: 1.6rem 2.4rem;
  color: var(--color-grey-600);
  background-color: var(--color-emerald-200);
  border-bottom: 0.5px solid var(--color-grey-100);
`;

function StaffRow({ staff }) {
  const { id: staffId, fullName, email, phone } = staff;
  return (
    <StyledRow>
      <p>{staffId}</p>
      <p>{fullName}</p>
      <p>{email}</p>
      <p>{phone}</p>
    </StyledRow>
  );
}

export default StaffRow;
