import React from 'react';
// react-router
import { Link } from 'react-router-dom';
// material-ui
import FlatButton from 'material-ui/FlatButton';

/*
  これはfunctional Componentと言って、state管理の必要が無い場合に使うコンポーネントです。
*/
function LinkList() {
  return (
    <div>
      <FlatButton label="Top" containerElement={<Link to="/" />} />
      <FlatButton label="タイトル1" containerElement={<Link to="/title1" />} />
      <FlatButton label="タイトル2" containerElement={<Link to="/title2" />} />
    </div>
  );
}

export default LinkList;
