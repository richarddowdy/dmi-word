import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  margin: 0 10px;
  padding: 8px 25px;
  background: dodgerblue;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  border: 2px solid white;

  &:hover {
    color: #a6a6a6;
    text-decoration: none;
  }
`;

export default StyledLink;
