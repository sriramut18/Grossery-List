import React, { Component } from 'react';
import './Item.css';


class Item extends Component {

    state = {
        hideRecord: false
    }

    showHideHandler = () => {
        console.log('showHideHandler')
        const hide = this.state.hideRecord;
        this.setState({
            hideRecord: !hide
        })
    }

    render() {
        return (
            <div className="Item" >
                
                    <div className="inline" > {this.props.name}: {this.props.quantity} </div>
                    {this.props.children}
                    {this.state.hideRecord &&
                        <div className='edit'>
                            <span>Edit item:</span> <input type="text" onChange={this.props.itemChange} value={this.props.name} /> 
                            <span>Edit quantity:</span> <input onChange={this.props.quantityChange} value={this.props.quantity}  type="text"/>
                        </div>
                    }
                    <button className="button button-small" onClick={this.showHideHandler}> {this.state.hideRecord ? 'Hide edit' : 'Edit'}</button><button className="button button-small" onClick={this.props.click}>Delete</button>

            </div>
        )
    }

}

export default Item;