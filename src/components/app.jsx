import React, { Component } from 'react';

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import AppBar from 'material-ui/AppBar';

// react-router
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

// components
import Props from './props';// 独自Componentの呼び出し方法
import PageSample from './pagesample';// 独自Componentの呼び出し方法
import LinkList from './linklist';// 独自Componentの呼び出し方法


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Riki Kawai',
      email: 'hoge@example.com',
      password: 'hogehoge',
    };
  }

  // onClick処理の記述方法
  handleClick(mailAddress) {
    const passwordState = this.state.password;
    // eslint-disable-next-line no-alert
    alert(`click handling ${mailAddress} ${passwordState}`);
  }

  // textfieldからデータを受け取ってStateに渡す
  handleNameChange(e) {
    this.setState({
      name: e.target.value,
    });
  }

  render() {
    const styles = {
      button: {
        marginLeft: '100px',
        backgroundColor: 'orange',
        color: 'white',
      },
      buttonText: {
        textTransform: 'none',
      },
    };

    return (
      <Router>
        <MuiThemeProvider>
          <div>
            <AppBar
              title={<span>React.js Sample Page</span>}
              iconElementLeft={<div />}
              iconElementRight={<LinkList />}
            />
            <h1 className="h1Class">
              Hello World, {this.state.name}
            </h1> {/* stateのデータを表示 */}
            <TextField
              hintText="Input your name!!"
              floatingLabelText="Name"
              floatingLabelFixed
              value={this.state.name}
              onChange={e => this.handleNameChange(e)}
            />
            <FlatButton
              style={styles.button}
              labelStyle={styles.buttonText}
              label="onClick Sample button"
              onClick={() => this.handleClick(this.state.email)}
            />
            <Switch>
              <Route exact path="/" render={props => <Props password={this.state.password} {...props} />} />
              <Route path="/title1" render={props => <PageSample title="title1" {...props} />} />
              <Route path="/title2" render={props => <PageSample title="title2" {...props} />} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
