import React, { Component } from 'react';
import { Provider } from "./context";

export default class HashRouter extends Component {
  constructor(props) {
    super();
    this.state = {
      location: {
        pathname: window.location.hash.slice(1) || '/',
      }
    }
  }
  

  componentDidMount() {
    window.location.hash = window.location.hash || '/';
    window.addEventListener('hashchange',() => {
      this.setState({
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1) || '/'
        }
      })
    })
  }
  
  render() {
    return (
      <Provider value={{ a: 1 }}>
        {this.props.children}
      </Provider>
    )
  }
}
