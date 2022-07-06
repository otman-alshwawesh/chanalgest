import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button} from 'react-bootstrap';


class Counter extends React.Component {
  state={
    coun : 0,
    }
    plusfun = () => {
      this.setState({
        coun: this.state.coun + 1,
      })
    }
    minfun = () => {
        this.setState({
          coun: this.state.coun - 1,
        })
      }
      resetfun = () => {
        this.setState({
          coun: 0,
        })
      }
  render() {
  return (
    <>
    <div className="Counter">


<Button variant="primary" onClick={this.plusfun}>+</Button>{' '}
<h>Count = {this.state.coun}</h>
<Button variant="primary"onClick={this.state.coun > 0 ? this.minfun : null} >-</Button>{' '}
    </div>
<Button className='button' variant="primary"onClick={this.resetfun} >reset</Button>{' '}
</>
  );
}
}
export default Counter;
