## 実行について

### (初回のみ)Dockerfileのビルド
- 以下のコマンドを実行する
```
$ make build
```

### ローカルへのモジュール展開(package.json更新時)
- ※プログラムの実行自体はDockerコンテナ内のnode_modulesが参照されるが、エディタはローカルのnode_modulesを見ているのでローカルにも展開しないとエディタ上でエラーになってしまう
- 以下のコマンドを実行する
```
$ yarn install
```

### Dockerコンテナの起動
- 以下のコマンドを実行する
```
$ make up
```

### アクセス
- 以下のURLにアクセスし、画面が正常に表示されることの確認

[http://localhost:3003](http://localhost:3003)

### Dockerコンテナの停止
- 以下のコマンドを実行する
```
$ make down
```

## VScodeの設定について

### コード自動整形
- 拡張機能「ESLint」をインストール
- setting.jsonのsetting項目に以下の記述を設定
  - ※今回用にVScodeのワークスペースを作成し、ワークスペースのsetting.jsonを編集することを推奨
- [setting.jsonの開き方](https://qiita.com/y-w/items/614843b259c04bb91495)

```
"settings": {
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
