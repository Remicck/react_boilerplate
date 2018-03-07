import React, { Component } from 'react';
import PropTypes from 'prop-types';

// material-ui
import FlatButton from 'material-ui/FlatButton';

class PropsClass extends Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   property: 'value',
    // };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    /*
      PropsClassをJSXで記述してある箇所
      そこのPropertyに「func」と言うものを指定しており、そこに
      Appクラスの、handleChildClickというメソッドを入れてある。

      つまり親コンポーネントのメソッドを、子コンポーネントで実行するにはpropsで渡せば良い
      その為に、constructor部分でthisをbindする必要がある。
    */
    this.props.func();
    /*
      <Route
        path="/propsclass"
        render={props => <PropsClass
          func={this.handleChildClick}
          {...props} />}
      />

        ↓ react-routerを通さない純粋なJAXの書き方の場合は以下

        <PropsClass func={this.handleChildClick} />
    */
  }

  render() {
    return (
      <div>
        <h2>子コンポーネントから親コンポーネントのメソッドを呼ぶ</h2>
        <p>クリックすると親のstateが書き換わって文字が変わるボタン↓</p>
        <FlatButton
          label="click"
          onClick={this.handleClick}
        />
      </div>
    );
  }
}


// propsで渡される値の型やRequirementを指定できます
PropsClass.propTypes = {
  func: PropTypes.func.isRequired,
};

export default PropsClass;
