import React, {Component} from 'react';
import Record from '../Record/Record'
import './Records.css';

class Records extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className='records'>
                <tr>
                    <th>ID</th>
                    <th>Concept</th>
                    <th>Amount</th>
                    <th>Date</th>
                </tr>
                <div>
                    {
                        this.props.records.map(record =>(
                            <Record info={record}></Record>
                        ))
                    }
                </div>
            </div>
        );
    }
}

export default Records;