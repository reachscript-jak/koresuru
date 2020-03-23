import React from 'react';
import logo from './logo.svg';
import './App.css';

const App = () => {
  const onClickGetData = () => alert('データ取得を押しました');
  const onClickRegistData = () => alert('データ登録を押しました');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>コレスル</p>
        <button onClick={onClickGetData}>データ取得</button>
        <br />
        <button onClick={onClickRegistData}>データ登録</button>
      </header>
    </div>
  );
};

export default App;
