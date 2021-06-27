import React, { Component } from "react";

import './Balance.css'

class Balance extends Component {
    constructor(props) {
        super(props);
    }

    calcBalance() {
        let total = this.props.balance.reduce((acc, val) =>{
            return (acc += val.amount);
        }, 0)
        return total;
    }

    render() {
        return (
            <div className="balance">
                <p> Balance: ${ this.calcBalance() }</p>
            </div>
        );
    }
}

export default Balance;
