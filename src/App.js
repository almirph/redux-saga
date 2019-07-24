import React, { Component } from 'react';
import './App.css';
import { Header, Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionsTimer } from './redux/action';
import { tickTimer } from './redux/saga';

class App extends Component {
  handleStart = () => {
    if (!this.props.counting) {
      this.props.start();
      this.props.tick(true);
    }
  };
  handleStop = () => {
    this.props.stop();
    this.props.tick(false);
  };

  render() {
    return (
      <div className='App'>
        <Header size='huge'>{this.props.number}</Header>
        <div>
          <Button primary onClick={this.handleStop}>
            Reset
          </Button>
          <Button secondary onClick={this.handleStart}>
            Start
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const dadosTimer = state;
  return dadosTimer;
};

const mapDispatchToProps = dispatch =>
  bindActionCreators({ ...actionsTimer }, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
