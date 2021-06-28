import React, { Component } from "react";

import "./Popup.css";

class Popup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            concept: "",
            amount: 0,
            day: 1999,
        };
    }

    handleEdit = async (e) => {
        e.preventDefault();
        try {
            let config = {
                method: "PUT",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(this.state),
            };
            let res = await fetch("http://localhost:4000/update/" + this.props.record.ID, config);
            this.props.update();
        } catch (error) {
            console.log(error);
        }
    };

    handleDelete = async (e) => {
        e.preventDefault();
        try {
            let config = {
                method: "DELETE"
            };
            let res = await fetch("http://localhost:4000/delete/" + this.props.record.ID, config);
            this.props.update();
        } catch (error) {
            console.log(error);
        }
    }


    conceptChange(e) {
        this.setState({
            concept: e.target.value,
        });
    }
    amountChange(e) {
        this.setState({
            amount: e.target.value,
        });
    }
    dayChange(e) {
        this.setState({
            day: e.target.value,
        });
    }

    render() {
        return (
            <div className="popup">
                <div className="popup__info">
                    <p> Concept: {this.props.record.concept}</p>
                </div>

                <form onSubmit={this.handleEdit.bind(this)}>
                    <div className="form__div">
                        <input
                            type="number"
                            name="amount"
                            placeholder="Amount"
                            onChange={this.amountChange.bind(this)}
                        ></input>
                        <input
                            type="Date"
                            name="day"
                            onChange={this.dayChange.bind(this)}
                        ></input>
                    </div>
                    <input
                        className="form__concept"
                        type="text"
                        name="concept"
                        placeholder="Concept"
                        onChange={this.conceptChange.bind(this)}
                    ></input>

                    <button className="form__btn" type="submit">
                        Edit
                    </button>
                </form>

                <svg
                    onClick={this.handleDelete.bind(this)}
                    className="popup__delete"
                    width="30"
                    height="30"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8.97321 12.1875H9.77679C9.88335 12.1875 9.98554 12.1505 10.0609 12.0845C10.1362 12.0186 10.1786 11.9292 10.1786 11.8359V5.50781C10.1786 5.41457 10.1362 5.32515 10.0609 5.25922C9.98554 5.19329 9.88335 5.15625 9.77679 5.15625H8.97321C8.86665 5.15625 8.76446 5.19329 8.68911 5.25922C8.61376 5.32515 8.57143 5.41457 8.57143 5.50781V11.8359C8.57143 11.9292 8.61376 12.0186 8.68911 12.0845C8.76446 12.1505 8.86665 12.1875 8.97321 12.1875ZM14.4643 2.34375H11.705L10.5666 0.682617C10.4238 0.474321 10.2217 0.30196 9.98003 0.182331C9.7384 0.0627019 9.46547 -0.000115529 9.18783 1.59506e-07H5.81216C5.53465 -1.43194e-05 5.26185 0.0628512 5.02035 0.182475C4.77884 0.3021 4.57685 0.474406 4.43404 0.682617L3.29498 2.34375H0.535714C0.393634 2.34375 0.257373 2.39314 0.156907 2.48104C0.0564412 2.56895 0 2.68818 0 2.8125L0 3.28125C0 3.40557 0.0564412 3.5248 0.156907 3.61271C0.257373 3.70061 0.393634 3.75 0.535714 3.75H1.07143V13.5938C1.07143 13.9667 1.24075 14.3244 1.54215 14.5881C1.84355 14.8518 2.25233 15 2.67857 15H12.3214C12.7477 15 13.1565 14.8518 13.4578 14.5881C13.7592 14.3244 13.9286 13.9667 13.9286 13.5938V3.75H14.4643C14.6064 3.75 14.7426 3.70061 14.8431 3.61271C14.9436 3.5248 15 3.40557 15 3.28125V2.8125C15 2.68818 14.9436 2.56895 14.8431 2.48104C14.7426 2.39314 14.6064 2.34375 14.4643 2.34375ZM5.75357 1.4915C5.77148 1.46543 5.79681 1.44386 5.82709 1.42892C5.85737 1.41398 5.89157 1.40616 5.92634 1.40625H9.07366C9.10837 1.40622 9.1425 1.41405 9.17272 1.42899C9.20294 1.44393 9.22822 1.46547 9.24609 1.4915L9.83069 2.34375H5.16931L5.75357 1.4915ZM12.3214 13.5938H2.67857V3.75H12.3214V13.5938ZM5.22321 12.1875H6.02679C6.13335 12.1875 6.23554 12.1505 6.31089 12.0845C6.38624 12.0186 6.42857 11.9292 6.42857 11.8359V5.50781C6.42857 5.41457 6.38624 5.32515 6.31089 5.25922C6.23554 5.19329 6.13335 5.15625 6.02679 5.15625H5.22321C5.11665 5.15625 5.01446 5.19329 4.93911 5.25922C4.86376 5.32515 4.82143 5.41457 4.82143 5.50781V11.8359C4.82143 11.9292 4.86376 12.0186 4.93911 12.0845C5.01446 12.1505 5.11665 12.1875 5.22321 12.1875Z"
                        fill="black"
                    />
                </svg>
            </div>
        );
    }
}

export default Popup;
