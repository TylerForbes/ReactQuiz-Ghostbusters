import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Quiz2 from './quiz2';
import {browserHistory} from 'react-router';

export default class Welcome extends React.Component {


constructor(props) {
  super(props);
  this.state = {
    started: false
  }
}

_Welcome() {
   this.setState({started: true});
    browserHistory.push('/quiz2');

}



render(){
  return(
    <div className="quizWelcome">
      { this.state.started ? '' : <div className="welcome"><div><h1>Are you afraid of no ghosts?</h1><h2>Do you have what it takes to join the.....</h2></div><div><button onClick={this._Welcome.bind(this)}>
        Let's Find Out!
      </button><h2> We're ready to believe you</h2></div></div>}

  </div>
  )
}



}
