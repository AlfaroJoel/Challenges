import React,{Component} from 'react'
import Balance from './Balance/Balance';
import Records from './Records/Records';
import FormRecord from './FormRecord/FormRecord';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { balance: [] };
  }

  updateRecord() {
      fetch("http://localhost:4000/")
          .then((response) => (
              response.json()
          ))
          .then((recurso) => {
              this.setState({
                  balance: recurso
              })
          })
  }

  componentDidMount() {
    this.updateRecord();
  }

  render() {
    if(this.state.balance.length > 0) {
      return(
        <div className="App">
          <Balance balance={this.state.balance}></Balance>
          <Records records={this.state.balance}></Records>
          <FormRecord update={this.updateRecord.bind(this)}></FormRecord>
        </div>
      )
    }else{
      return(
        <p>
          Cargando...
        </p>
      )
    }
  }
}

export default App;
