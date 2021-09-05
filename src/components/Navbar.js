import React from 'react';
import styled from 'styled-components';

/* Estilos */
const Div = styled.div`
  display: flex;
  align-items: center;
  background-color: dodgerblue;
  color: navy;
  margin-bottom: 2rem;
`;

const P = styled.p`
  padding: .5rem 1rem;
  border-radius: 2rem;
`;


/* Components */
class Navbar extends React.Component {
  render () {
    return (
      <Div>
        <i className="fa fa-shop"></i>
        <P> {this.props.value} </P>
        <p> Items </p>
      </Div>
    )
  }
}

export default Navbar;