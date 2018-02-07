import React,{Component} from 'react';

import BadModal from './BadModal';

class Syntax13 extends Component {

  constructor(props) {
	super(props);

    this.state = {
      movieId: 0,
      movieName: "",
    };
  }

  render() {
    return (
      <div>
      	<div>{this.state.movieId}</div>
        <div>{this.state.movieName}</div>
        <div>
          <BadModal>
            <h1> Modal title </h1>
            <p> Modal content</p>
          </BadModal>
        </div>
      </div>
    );
  }
}

export default Syntax13;
