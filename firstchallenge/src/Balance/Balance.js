import React, { Component } from "react";

class Balance extends Component {
    constructor(props) {
        super(props);
        this.state = {
            total: 0
        }
    }

    componentDidMount() {
        let total = this.props.balance.reduce((acc, val) =>{
            return (acc += val.amount);
        }, 0)
        this.setState({
            total: total > 0 ? total : 0
        })
    }

    render() {
        return (
            <div className="balance">
                <p> Total Balance: { this.state.total }</p>
            </div>
        );
    }
}

export default Balance;
