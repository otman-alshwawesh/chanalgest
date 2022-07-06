import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; 
import { Button} from 'react-bootstrap';
import Counter from "./component/Counter"

class App extends React.Component {
  state={
    show : false,
    }
    showfun = () => {
      this.setState({
        ...this.state,
        show: !this.state.show,
      })
    }
  render() {
  return (
    <div className="App">


<br></br>
<Button  variant="primary" onClick={this.showfun}>{this.state.show === true ? "hide" : "show"}
</Button>
<br></br>
{this.state.show === true ? <Counter/> : null}


    </div>
  );
}
}
export default App;
