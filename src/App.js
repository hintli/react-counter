import React,{Component} from "react"
import Counter from "./Counter";
import "./App.css"

class App extends Component {
  state={
    number:0
  }

  increment = () => {
    this.setState(
      {
        number:this.state.number+1
      }
    )
  }
  decrement = () => {
    this.setState(
      {
        number:this.state.number-1
      }
    )
  }
  render() {
    return(
      <div className="App">
      <h2>Counter App</h2>
      <Counter number={this.state.number} increment={this.increment}
      decrement={this.decrement}/>
      </div>
      
    )
  }
} 

export default App;

