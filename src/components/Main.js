import React from 'react';
import styled from 'styled-components';
import {nanoid} from 'nanoid';

/* Estilos*/
const TextInput = styled.input.attrs(props => ({
  className: "btn btn-primary"
}))`
  width: min-content;
  padding: .2rem;
  margin-right: 1rem;
  background-color: rgb(255, 193, 7);
  border: .2rem solid goldenrod;
  font-size: 1.6rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: .5rem;
  margin-right: .5rem;
  border-width: .2rem;
  border-style: solid;
`;

const AddInput = styled(Input)`
  background-color: tomato;
  border-color: orangered;
`;

const MenosInput = styled(Input)`
  background-color: dodgerblue;
  border-color: blue;
`;

const RemoveInput = styled(Input)`
  background-color: aquamarine;
  border-color: mediumaquamarine;
`;

const Div = styled.div`
  margin-bottom: .4rem;
`;

/* Componentes */
class Main extends React.Component {

  constructor (props) {
    super(props);

    this.addValue = this.addValue.bind(this);
    this.menosValue = this.menosValue.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.reset = this.reset.bind(this);
  }

  menosValue (event) {
    const items = this.props.value;
    if(items[event.target.name])
      items[event.target.name]--;
    this.props.changeItems(items);
  }

  addValue (event) {
    const items = this.props.value;
    items[event.target.name]++;
    this.props.changeItems(items);
  }

  removeItem (event) {
    const items = this.props.value;
    delete items[event.target.name];
    this.props.changeItems(items);
  }

  shouldBeDisabled (name) {
    const items = this.props.value;
    return (items[name] === 0);
  }

  reset () {
    const cant = this.props.totalOriginal;
    const itemsReseted = {};

    for(let i=1; i<=cant; ++i){
      itemsReseted["item" + i] = 0;
    }

    this.props.changeItems(itemsReseted);
  }

  render () {
    const items = this.props.value;
    const keyItems = Object.keys(items);
    return (
      <div>
        <button onClick={this.reset}>
          Reset
        </button>
        {
          keyItems.map(keyItem => 
            <Div key={nanoid()}>
              <TextInput
                type="text"
                value={items[keyItem]}
                readOnly
              />
              <AddInput
                type="button"
                value="+"
                name={keyItem}
                onClick={this.addValue}
              />
              <MenosInput
                type="button"
                value="-"
                name={keyItem}
                onClick={this.menosValue}
              />
              <RemoveInput
                type="button"
                value="x"
                name={keyItem}
                onClick={this.removeItem}
              />
            </Div>
          )
        }
      </div>
    )
  }
}

export default Main;