import React, {Component} from 'react';

import './FormRecord.css';

class FormRecord extends Component {

    constructor(props){
        super(props);
        this.state = {
            concept: '',
            amount: 0,
            day: 1999
        }
    }

    handleSubmit = async e =>{
        e.preventDefault();
        try {
            let config = {
                method:'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(this.state)
            }
            let res = await fetch('http://localhost:4000/add', config);
            this.props.update();
        } catch (error) {
            console.log(error);
        }
    }

    conceptChange(e){
        this.setState({
            concept: e.target.value
        })
    }
    amountChange(e){
        this.setState({
            amount: e.target.value
        })
    }
    dayChange(e){
        this.setState({
            day: e.target.value
        })
    }

    render() {
        return(
            <>
                <form  className='form-record' onSubmit={this.handleSubmit.bind(this)}>
                    <div className='form__div'>
                        <input type='number' name='amount' placeholder='Amount' onChange={this.amountChange.bind(this)}></input>
                        <input type='Date' name='day' onChange={this.dayChange.bind(this)}></input>
                    </div>
                    <input className='form__concept' type='text' name='concept' placeholder='Concept' onChange={this.conceptChange.bind(this)}></input>
                    <button className='form__btn' type='submit'>Save</button>
                </form>
            </>
        )
    }
}

export default FormRecord;