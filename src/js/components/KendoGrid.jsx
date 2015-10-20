import React from 'react';
import ReactDOM from 'react-dom';
// import {es6BindAll} from 'es6bindall';
var k = React.Kendo = require('react-kendo');


class KendoGrid extends React.Component{
  // constructor(props) {
  //   super(props);
  //   // es6BindAll(this, ["handleChange"]);
  // }


  render() {
    return (
      <k.Grid options={this.props.options} />
    );
  }
}


export default KendoGrid;