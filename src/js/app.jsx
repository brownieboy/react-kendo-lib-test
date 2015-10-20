var React = require('react');
var ReactDOM = require('react-dom');
var k = React.Kendo = require('react-kendo');

import KendoGrid from "./components/KendoGrid.jsx";
import KendoTreeView from "./components/KendoTreeView.jsx";
// import KendoSplitter from "./components/KendoSplitter.jsx";


class App extends React.Component {
  render() {
    var props = this.props;
    console.log("App render()");
    return (
      <k.Splitter options={props.splitterOptions} >
        <KendoTreeView options={props.treeOptions} />
        <KendoGrid options={props.gridOptions} />
      </k.Splitter>
    );
  }
}


var treeOptions = {
  animation: false,
  dataSource: [
    { text: "foo", items: [
      { text: "bar" }
    ] }
  ]
};

var gridOptions = {
    selectable: "multiple cell",
    allowCopy: true,
    columns: [
        { field: "productName" },
        { field: "category" }
    ],
    dataSource: [
        { productName: "Tea", category: "Beverages" },
        { productName: "Coffee", category: "Beverages" },
        { productName: "Ham", category: "Food" },
        { productName: "Bread", category: "Food" }
    ]
};

var splitterOptions = {
  orientation: 'horizontal',
  panes: [
    { collapsible: false, size: '300px' },
    { resizable: true }
  ]
};

ReactDOM.render(<App
                  gridOptions={gridOptions}
                  treeOptions={treeOptions}
                  splitterOptions={splitterOptions} />, document.getElementById("main"));


