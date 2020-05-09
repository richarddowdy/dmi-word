import styled from 'styled-components';

const Input = styled.input`
  margin: 50px auto 15px;
  padding: 5px;
  text-align: center;
  display: block;
  width: 35%;
  border: 1px solid;
  border-radius: 20px;
  outline: none;
  border-color: ${props => props.value ? "#61a668" : "#cccccc"};
  box-shadow: 0 0 10px ${props => props.value ?  "#61a668" : "#cccccc"};
`;

export default Input;
