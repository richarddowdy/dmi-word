import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  height: 20px;
  width: 40px;
  margin: 0 10px;
  padding: 8px 25px;
  background: pink;
  color: white;
  font-size: 20px;
  border-radius: 3px;
`;

export default StyledLink;
