import React from 'react';
import ReactDOM from 'react-dom';
// import {es6BindAll} from 'es6bindall';
var k = React.Kendo = require('react-kendo');


class KendoSplitter extends React.Component{
  // constructor(props) {
  //   super(props);
  //   // es6BindAll(this, ["handleChange"]);
  // }


  render() {
  	  	console.log("Grid render()");

    return (
      <k.Splitter options={this.props.options} />
    )
  }
}


export default KendoSplitter;