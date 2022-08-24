import React from 'react';

class App extends React.Component {
  // constructorを貼り付けてください
  constructor(props) {
    super(props);
    // stateを定義してください
    this.state = {name:"MasahiroAmemi"};
    
  }
  
  render() {
    return (
    	<div>
    	  <h1>こんにちは、MasahiroAmemiさん！</h1>
        <button onClick={() => {console.log('Masahiro')}}>Masahiro</button>
        <button onClick={() => {console.log('Amemi')}}>Amemi</button>
      </div>
    );
  }
}

export default App;
