import styled, { css } from 'styled-components';

const Row = styled.div`
  display: flex;
  font-size: 1.6rem;
  font-family: 'Sono';
  color: var(--color-grey-600);
  font-weight: 400;

  ${(props) =>
    props.type === 'horizontal' &&
    css`
      justify-content: space-between;
      align-items: center;
    `}

  ${(props) =>
    props.type === 'vertical' &&
    css`
      flex-direction: column;
      gap: 1.6rem;
    `}
`;

Row.defaultProps = {
  type: 'vertical',
};

export default Row;
