import React from 'react';
import PropTypes from 'prop-types';
/*
  これはfunctional Componentと言って、state管理の必要が無い場合に使うコンポーネントです。
*/
function PageSample(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        props.titleとして「{props.title}」が渡されました
      </p>
    </div>
  );
}

// propsで渡される値の型やRequirementを指定できます
PageSample.propTypes = {
  title: PropTypes.string.isRequired,
};

export default PageSample;
