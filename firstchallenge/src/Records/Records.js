import React, { Component } from "react";
import Record from "../Record/Record";
import "./Records.css";

class Records extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="records">
                <tr className="records__th">
                    <th>Date</th>
                    <th>Amount</th>
                    <th>More</th>
                </tr>
                <div>
                    {this.props.records.map((record) => (
                        <Record key={record.ID} info={record}></Record>
                    ))}
                </div>
            </div>
        );
    }
}

export default Records;
