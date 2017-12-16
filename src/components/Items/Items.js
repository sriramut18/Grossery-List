import React, { Component } from 'react';
import Item from './Item/Item';

class Items extends Component {

  render() {
    return this.props.items.map((item, index) => {
      return <Item
        name={item.name}
        quantity={item.quantity}
        click={() => this.props.click(index)}
        key={item.id}
        itemChange={(event) => this.props.itemChange(event, item.id)}
        quantityChange={(event) => this.props.quantityChange(event, item.id)}
        hide={(event)=>this.props.showHide(event, item.id)}
      />
    })
  }
}

export default Items