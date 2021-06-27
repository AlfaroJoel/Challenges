import React, {Component} from 'react';

import './Record.css';

class Record extends Component{
    constructor(props){
        super(props)
    }
    render() {
        return(
            <tr className='Record'>
                <td>{this.props.info.ID}</td>
                <td>{this.props.info.concept}</td>
                <td>{this.props.info.amount}</td>
                <td>{this.props.info.day}</td>
            </tr>
        )
    }
}

export default Record;