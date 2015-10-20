var React = require('react');
var ReactDOM = require('react-dom');
var k = React.Kendo = require('react-kendo');

/**
 * Instead of, e.g.
 * $('#my-splitter').kendoSplitter(splitterOptions);
 */
var splitterOptions = {
  orientation: 'horizontal',
  panes: [
    { collapsible: false, size: '300px' },
    { resizable: true }
  ]
};


var Workstation = React.createClass({
  render: function () {
    var props = this.props;
    return (
      <k.Splitter options={props.splitterOptions}>
        <k.TreeView options={props.treeOptions} />
        <k.Grid options={props.gridOptions} />
      </k.Splitter>
    );
  }
});


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

ReactDOM.render(<Workstation
                  gridOptions={gridOptions}
                  treeOptions={treeOptions} />, document.getElementById("main"));

