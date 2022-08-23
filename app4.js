import React from 'react';

class App extends React.Component {
  render() {
    return (
    	<div>
    	  <h1>こんにちは、にんじゃわんこさん！</h1>
        {/* buttonタグ内に、コンソールに名前を出力するonClickイベントを追加する */}
        <button onClick={() => {console.log("Masahiro")}}>Masahiro</button>
        
        {/* buttonタグ内に、コンソールに名前を出力するonClickイベントを追加する */}
        <button onClick={() => {console.log("Amemi")}}>Amemi</button>
        
      </div>
    );
  }
}

export default App;
