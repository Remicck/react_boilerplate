import React, { Component } from 'react';

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

// react-router
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

// components
import Props from './props';// 独自Componentの呼び出し方法


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Riki Kawai',
      email: 'hoge@example.com',
      password: 'hogehoge',
    };
  };

  // onClick処理の記述方法
  handleClick(mailAddress, password) {
    console.log('click handling', mailAddress, password);
  };

  // textfieldからデータを受け取ってStateに渡す
  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  };


  render() {
    const styles = {
      button: {
        marginLeft: '100px',
        backgroundColor: 'orange',
        color: 'white',
      },
    };

    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <h1 className="h1Class">
              Hello World, {this.state.name}
            </h1> {/* stateのデータを表示 */}
            <TextField
              hintText="Input your name!!"
              floatingLabelText="Name"
              floatingLabelFixed={true}
              value={this.state.name}
              onChange={(e) => this.handleNameChange(e)}
            />
            <FlatButton
              style={styles.button}
              label="onClick Sample button(Look console)"
              onClick={() => this.handleClick(this.state.email, this.state.password)}
            />
            <Props password={this.state.password} />
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
