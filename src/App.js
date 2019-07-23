import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { clickButton } from './action';
import { bindActionCreators } from 'redux';

/**@summary store feita seguindo os passos de https://medium.com/reactbrasil/iniciando-com-redux-c14ca7b7dcf */

class App extends Component {
  state = {
    inputValue: ''
  };

  inputValueHandle = event => {
    this.setState({ inputValue: event.target.value });
  };

  render() {
    const { inputValue } = this.state;
    const { clickButton, newValue } = this.props;

    return (
      <div className='App' style={{ paddingTop: '10px' }}>
        <input
          type='text'
          value={inputValue}
          onChange={this.inputValueHandle}
        />
        <button onClick={() => clickButton(inputValue)}>Click me!</button>
        <h1>{newValue}</h1>
      </div>
    );
  }
}

const mapStateToProps = store => ({ newValue: store.clickState.newValue });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
