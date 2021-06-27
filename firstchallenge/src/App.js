import React,{Component} from 'react'
import Balance from './Balance/Balance';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { balance: [] };
  }

  componentDidMount() {
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

  render() {
    if(this.state.balance.length > 0) {
      return(
        <div className="App">
          <Balance balance={this.state.balance}></Balance>
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
