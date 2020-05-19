import styled, { css } from 'styled-components';

const List = styled.ul`
  padding: 0;
  margin: 0;

  li {
    list-style-type: none;
  }

  ${props => props.styles && css`
    ${props.styles}
  `}
`;

export default List;
