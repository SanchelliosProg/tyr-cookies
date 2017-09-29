import React, {Component} from 'react';
import {connect} from 'react-redux'
import * as actions from '../actions';

class App extends Component {
  componentWillMount() {
    console.log('PROPS:',this.props);
    this.props.getCookie();
  }

  render() {
    return (
      <div className="container">
        <h1>{this.props.cookieQuote}</h1>
        <p>Here should be your cookie quote</p>
        <button onClick={this.props.setCookie}>New Cookie</button>
        <button onClick={this.props.getCookie}>Click</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log('STATE',state);
  return {
    cookieQuote:state.cookie.quote
  }
};

export default connect(mapStateToProps, actions)(App);