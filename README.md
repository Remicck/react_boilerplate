# react_boilerplate

## 開発環境と使い方
### Mac
- Node.js v8.9.4
- yarn v0.24.5

```bash
yarn install
yarn run start
```

### Windows(Subsystem Ubuntu)

- nvmでNode.js v8.9.4(lts)

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
nvm install --lts
```

- yarn v1.3.2

```bash
sudo apt remove cmdtest
sudo apt remove yarn
curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -
echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list
sudo apt-get update && sudo apt-get install yarn
```

- 実行

```bash
yarn install
yarn run start
```

## 利用している技術
- webpack [task runner]
- React.js [view management]
  - material-ui [design]

material-uiは[Material\-UI Theme/Palette Generator](https://cimdalli.github.io/mui-theme-generator/)を利用してカラーのテンプレートを作成している。  
テンプレートになっているコードは以下
```javascript
updateTheme = {//そのうち追加
  parette: {
    color: '#000000',
  },
};
```