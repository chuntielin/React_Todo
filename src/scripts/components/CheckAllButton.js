import React from 'react';
var TodoActions = require('../actions/TodoActions');

const styles = {
  check: {
    width: '54px',
    height: '100%',
    backgroundColor: '#FFFFFF',
    border: 'none',
    outline: 'none'
  }
};

const CheckAllButton = React.createClass({

  _onToggleCompleteAll: function() {
  TodoActions.toggleCompleteAll();
  },

  render() {
    return (
        <button
          type="button"
          style={styles.check}
          className="fa fa-check"
          onChange={this._onToggleCompleteAll}
          checked={this.props.areAllComplete ? 'checked' : ''}
        />
    )
  }
});

module.exports = CheckAllButton;
