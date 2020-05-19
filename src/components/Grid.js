import styled, { css } from 'styled-components';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-column-gap: 20px;

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

Grid.Item = styled.div`
  grid-column: span ${props => props.span || 1};

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

export default Grid;
