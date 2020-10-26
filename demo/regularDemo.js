import Regular from '../src/index';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
class Demo extends Component {
    render(){
        return( <Regular onChange={(v)=>{console.log(v)}}/> )
    }
}
export default Demo;