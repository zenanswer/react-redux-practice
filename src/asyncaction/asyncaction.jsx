import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { searchInput } from '../actions/asyncaction';

const AsyncActionView = ({ showText, onSearchInput }) => (
  <div>
    <input type="text" onInput={inputevent => onSearchInput(inputevent.target.value)} />
    <textarea rows="50" cols="50" value={showText.join('\n')} readOnly />
  </div>
);

AsyncActionView.defaultProps = {
  showText: [],
  onSearchInput: text => (console.log(text)),
};

AsyncActionView.propTypes = {
  showText: PropTypes.arrayOf(PropTypes.string),
  onSearchInput: PropTypes.func,
};

function mapStateToProps(state) {
  return {
    showText: state.showText,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    onSearchInput: (text) => {
      dispatch(searchInput(text));
    },
  };
}

const AsyncActionConnected = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AsyncActionView);

const AsyncAction = () => (
  <div>
    <h2>AsyncAction</h2>
    <AsyncActionConnected />
  </div>
);


export default AsyncAction;
