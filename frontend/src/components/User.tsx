import React from 'react'; 
import styled from 'styled-components'

interface IUser {
  name: string;
  email?: string;
}

interface Props {
  user: IUser;
}

const strong = styled.strong`
  padding: 4em;
  background: #000;
`;

const button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const User: React.FC<Props> = ({ user }) => { 
  return ( 
    <div> 
      <strong>Nome: </strong> {user.name} <br /> 
      <strong>E-mail: </strong> {user.email || 'Não possui e-mail'} <br /><br /> 
      <button>Normal</button>
      <button>Primary</button>
    </div> 
  );
};

export default User;
