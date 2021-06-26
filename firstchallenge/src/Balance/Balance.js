import React, { Component } from "react";

class Balance extends Component {
    constructor(props) {
        super(props);
        this.state = { balance: {} };
    }

    componentDidMount() {
        console.log('entre')
        fetch("http://localhost:3050")
            .then((response) => {
                console.log('entre')
                return response.json();
            })
            .then((recurso) => {
                console.log('entre')
                console.log(recurso);
            });
    }

    render() {
        return (
            <div className="balance">
                <p> Balance Total: </p>
            </div>
        );
    }
}

export default Balance;
