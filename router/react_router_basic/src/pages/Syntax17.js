import React,{Component} from 'react';

class Syntax17 extends Component {

  constructor(props) {
    super(props);

  async function sleep(timeout) {
    return new Promise((resolve, reject) => {
      setTimeout(function() {
        resolve();
      }, timeout);
    });
  }

  (async function() {
    console.log('Do some thing, ' + new Date());
    await sleep(3000);
    console.log('Do other things, ' + new Date());
  })();

  }

  render() {

    return (
      <div>
      </div>
    );
  }
}

export default Syntax17;