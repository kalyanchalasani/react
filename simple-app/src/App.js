import React from 'react';

import { connect } from 'react-redux';

import { activateAction, closeAction, resetAction } from './redux';

// App.js
export class App extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.customAction.title || 'Hello World!'}</h1>

        {this.props.customAction.title ? (
          <button onClick={this.props.closeAction}>Close</button>
        ) : (
          <button
            onClick={() =>
              this.props.activateAction({ title: 'Activated!' })
            }
          >
            Click Me!
          </button>
        )}
          <button onClick={this.props.resetAction}>Reset</button>
      </div>
    );
  }
}

// AppContainer.js
const mapStateToProps = state => ({
  customAction: state.customAction,
});

const mapDispatchToProps = {
  activateAction,
  closeAction,
  resetAction,
};

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;