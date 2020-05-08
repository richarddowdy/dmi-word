import styled from 'styled-components';

const Input = styled.input`
margin: 50px auto 15px;
padding: 5px;
display: block;
width: 35%;
border: 5px solid;
border-radius: 5px;
outline: none;
border-color: ${props => props.value ? "green" : "red"}
`;

export default Input;
