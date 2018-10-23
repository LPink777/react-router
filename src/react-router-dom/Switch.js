import React, { Component } from 'react'
import { Consumer } from './context';
import pathToRegExp from 'path-to-regexp';

export default class Switch extends Component {
  render() {
    return (
      <Consumer>
        {
            state => {
                let pathname = state.location.pathname;
                let children = this.props.children;
                for(let i in children){
                    let path = children[i].props.path || '';
                    let reg = pathToRegExp(path,[],{end:false});
                    if(reg.test(pathname)){
                        return children[i];
                    }
                }
                return null;
            }
        }
      </Consumer>
    )
  }
}
