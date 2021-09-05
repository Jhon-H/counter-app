import React from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar';
import Main from './components/Main';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      cant: 0,
      totalOriginal: 5,
      items: {
        item1: 0,
        item2: 0,
        item3: 0,
        item4: 0,
        item5: 0
      }
    };

    this.changeCant = this.changeCant.bind(this);
    this.changeItems = this.changeItems.bind(this);
  }

  changeCant (newValue) {
    this.setState({"cant": newValue });
  }

  changeItems (items) {
    this.setState({"items": items });
    const newCant = Object.keys(items)
                    .filter( key => items[key] > 0).length;

    if(newCant != this.state.cant)
      this.changeCant(newCant);
  }

  render () {
    return (
      <div>
        <Navbar value={this.state.cant} />
        <Main
          changeItems={this.changeItems}
          value={this.state.items}
          totalOriginal={this.state.totalOriginal}
        />
      </div>
    )
  }
}

export default App;