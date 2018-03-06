import React from 'react';
import PropTypes from 'prop-types';
/*
  これはfunctional Componentと言って、state管理の必要が無い場合に使うコンポーネントです。
*/
function Props(props) {
  return (
    <div>
      <h2>My password is...</h2>
      <p>
        {props.password} :p<br />
        This value was sent by App component.
      </p>
    </div>
  );
}

// propsで渡される値の型やRequirementを指定できます
Props.propTypes = {
  password: PropTypes.string.isRequired,
};

export default Props;
