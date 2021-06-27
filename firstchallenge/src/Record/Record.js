import React, { Component } from "react";
import Popup from "../Popup/Popup";

import "./Record.css";

class Record extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        }
    }

    popupOn() {
        this.setState({
            visible: !this.state.visible
        })
    }

    render() {
        return (
            <tr className="record">
                <td className="record__day">
                    {this.props.info.day.slice(5, 10)}
                </td>
                <td
                    className={
                        this.props.info.amount > 0
                            ? "record__amount green"
                            : "record__amount red"
                    }
                >
                    {this.props.info.amount > 0
                        ? "$" + this.props.info.amount
                        : "- $" + Math.abs(this.props.info.amount)}
                </td>
                <td className="record__more">
                    <svg
                        onClick={this.popupOn.bind(this)}
                        width="40"
                        height="8"
                        viewBox="0 0 20 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M12.8125 3C12.8125 4.55469 11.5547 5.8125 10 5.8125C8.44531 5.8125 7.1875 4.55469 7.1875 3C7.1875 1.44531 8.44531 0.1875 10 0.1875C11.5547 0.1875 12.8125 1.44531 12.8125 3ZM16.875 0.1875C15.3203 0.1875 14.0625 1.44531 14.0625 3C14.0625 4.55469 15.3203 5.8125 16.875 5.8125C18.4297 5.8125 19.6875 4.55469 19.6875 3C19.6875 1.44531 18.4297 0.1875 16.875 0.1875ZM3.125 0.1875C1.57031 0.1875 0.3125 1.44531 0.3125 3C0.3125 4.55469 1.57031 5.8125 3.125 5.8125C4.67969 5.8125 5.9375 4.55469 5.9375 3C5.9375 1.44531 4.67969 0.1875 3.125 0.1875Z"
                            fill="black"
                        />
                    </svg>
                </td>
                {this.state.visible && <Popup record={this.props.info}></Popup>}
                
            </tr>
        );
    }
}

export default Record;
