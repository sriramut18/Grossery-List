import React, { Component } from 'react';
import './AddItem.css';

class AddItem extends Component {

    render() {
        return (
            <div>
                <form className='addItem' onSubmit={this.props.submit}>
                    <div>
                        Item:
                        <input type="text" name="name" />
                    </div>
                    <div>
                        Quantity:
                        <input type="text" name="quantity" />
                    </div>
                    <button className="button button-small" type="submit" >Add item</button>
                </form>
            </div>
        )
    }
}

export default AddItem;