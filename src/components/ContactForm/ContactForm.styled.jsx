import styled from '@emotion/styled';


export const FormStyle = styled.div`
margin: 0px;
color: gray;
display: flex;
flex-direction: column;
align-items: flex-start;
gap: 16px;
padding: 20px;
border: 1px solid gray;
border-radius: 5px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-weight: 500;
`;

export const Input = styled.input`
  width: 200px;
`;

export const Button = styled.button`
width: 96px;
height: 24px;
background-color: white;
border: 1px solid gray;
border-radius: 5px;
cursor: pointer;
&:hover, &:focus {
  border-color: green;
  color: green;
}
`;
