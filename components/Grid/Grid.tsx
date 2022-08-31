import * as React from 'react';
// import custom components here
import GridSettings from './GridSettings/GridSettings';
import GridColumn from '../Grid/GridColumn/GridColumn';
// import styles here
import './Grid.css';

function Grid(props: { children: any }) {
  const { children } = props;
  /**
   * @name modifiedChildComponents
   * @description used to set the data source in column components
   */
  const modifiedChildComponents = React.Children.map(children, (child, index) =>
    React.cloneElement(child, {
      first: index !== 0 && children.length > 1,
      dataSource: children[0].props.dataSource,
    })
  );
  delete modifiedChildComponents[0]; // removing data source element from child components
  return <div className="grid-container">{modifiedChildComponents}</div>;
}
// setting sub componets reference
Grid.Column = GridColumn;
Grid.Settings = GridSettings;

export default Grid;
