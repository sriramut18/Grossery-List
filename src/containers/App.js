import React, { Component } from 'react';
import './App.css';
import Items from '../components/Items/Items'
import Cockpit from '../components/Cockpit/Cockpit'
import AddItem from '../components/AddItem/AddItem'

const uuidv1 = require('uuid/v1');


class App extends Component {
  state = {
    items: [
      { id: uuidv1(), name: 'Crackers & Rice Cakes', quantity: '2 packets' },
      { id: uuidv1(), name: 'Oscar Mayer Bologna 98% Fat Free', quantity: '3 pieces' },
      { id: uuidv1(), name: 'Coca-Cola Vanilla Soda', quantity: '5 bottles' },
      { id: uuidv1(), name: 'Donuts Coffee K-Cups OriginalDunkin', quantity: '3 kg' },
      { id: uuidv1(), name: 'Blue Diamond Almonds Lightly Salted Sea Salt', quantity: '6 packets' },
      { id: uuidv1(), name: 'DiGiorno Rising Crust Frozen Pizza Pepperoni', quantity: '3 slices' }
    ],
    otherState: 'some other value',
    showItems: false
  }

  addItemHandler = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const quantity = event.target.quantity.value;

    if(name&&quantity){
      const item = { id: uuidv1(), name, quantity }
      
          this.setState({
            items: [...this.state.items, item]
          })
      
          event.target.name.value = '';
          event.target.quantity.value = '';
    } 
    
  }

  itemChangedHandler = (event, id) => {
    const itemIndex = this.state.items.findIndex(p => {
      return p.id === id
    })
    const item = {
      ...this.state.items[itemIndex]
    };

    item.name = event.target.value;
    const items = [...this.state.items];
    items[itemIndex] = item

    this.setState({
      items: items
    })
  }

  quantityChangedHandler = (event, id) => {
    const itemIndex = this.state.items.findIndex(p => {
      return p.id === id
    })
    const item = {
      ...this.state.items[itemIndex]
    };

    item.quantity = event.target.value;
    const items = [...this.state.items];
    items[itemIndex] = item

    this.setState({
      items: items
    })
  }


  deleteItemHandler = (index) => {
    const items = [...this.state.items]
    items.splice(index, 1);
    this.setState({ items })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showItems;
    this.setState({
      showItems: !doesShow
    })
  }


  render() {

    let items = null;

    if (this.state.showItems) {
      items = (
        <div className="Items">
          <Items
            items={this.state.items}
            click={this.deleteItemHandler}
            itemChange={this.itemChangedHandler}
            quantityChange={this.quantityChangedHandler}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <Cockpit click={this.togglePersonsHandler} />
        <AddItem submit={this.addItemHandler} />
        {items}
      </div>
    );

  }
}

export default App;
