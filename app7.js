import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: 'MasahiroAmemi};
  }
  
  render() {
    return (
    	<div>
    	  <h1>こんにちは、{this.state.name}さん！</h1>
    	  {/* onClickの処理に、stateを変更する処理を加えてください */}
        <button onClick={() => {this.setState({name:"Masahiro"})}}>Masahiro</button>
        
        {/* onClickの処理に、stateを変更する処理を加えてください */}
        <button onClick={() => {this.setState({name:"Amemi"})}}>Amemi</button>
        
      </div>
    );
  }
}

export default App;
