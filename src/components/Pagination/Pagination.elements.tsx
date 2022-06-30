import styled from 'styled-components';

export const PaginationContainer = styled.div`
  margin: ${props => props.theme.paginationContainer?.margin || '10px 0px 0px 0px'};
  display: flex;
  gap: 10px;
`;
