import React,{Component} from 'react';

class BadModal extends Component {
  render() {
      return (
          <div className="modal">
              { this.props.children }
          </div>
      )
  }
}

export default BadModal;