import React from 'react';
import API, { graphqlOperation } from '@aws-amplify/api';
import PubSub from '@aws-amplify/pubsub';

import awsconfig from './aws-exports';
import logo from './logo.svg';
import './App.css';
import { listTodos } from './graphql/queries';
import { createTodo } from './graphql/mutations';

API.configure(awsconfig);
PubSub.configure(awsconfig);

const App = () => {
  const onClickGetData = async () => {
    const todos = await API.graphql(graphqlOperation(listTodos));
    console.log(todos);
  };
  const onClickRegistData = async () => {
    const todo = { name: 'じゃけぇの追加', description: 'ですくりぷしょん' };
    await API.graphql(graphqlOperation(createTodo, { input: todo }));
    alert('登録しました！');
  };
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
