import React, { Component } from 'react'
import { Consumer } from "./context";
import pathToRegExp from 'path-to-regexp';

export default class Route extends Component {
  render() {
    return (
      <Consumer>
        {state => {
          let { path, component: Component, exact } = this.props;
          exact = exact ? exact : false;
          let pathname = state.location.pathname;
          let keys = [];
          let reg = pathToRegExp(path, keys, { end: exact });
          keys = keys.map(item=>item.name); //[id]
          let result = pathname.match(reg);
          let [url,...values] = result || [];
          let props = {
            location: state.location,
            history: state.history,
            match:{
              params: keys.reduce((obj,currnt,index)=>{
                obj[currnt] = values[index];
                return obj;
              },{})
            }
          }
          if (result) {
            return <Component {...props}></Component>
          }
          return null
        }}
      </Consumer>
    )
  }
}
