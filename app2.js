import React from 'react';

class App extends React.Component {
  render() {
    // 定数nameを定義する
    const name = "名前入力"
    
    // 定数imgUrlを定義してください
    const imgUrl = "画像URL"
    
    return (
      <div>
        {/* 定数nameを用いて"名前入力"と表示されるようにする */}
        <h1>{name}</h1>
        
        {/* 定数imgUrlを用いて画像が表示されるようにする */}
        <img src = {imgUrl}/>
        
      </div>
    );
  }
}

export default App;