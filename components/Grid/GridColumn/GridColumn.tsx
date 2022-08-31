import * as React from 'react';
import {
  GridColumnPropsType,
  GridDataSourcePropsType,
} from '../../../types/global-types';

/**
 * A column sub-component for Grid.
 */
const GridColumn: React.FC<GridColumnPropsType> = (props) => {
  return (
    <div className="grid-column-container">
      <div
        className="grid-column-container__title"
        style={{ width: `${props?.width}px` }}
      >
        {props.dataPath}
      </div>
      <div className="grid-column-container__data-wrapper">
        {props?.dataSource?.map((eachElement: GridDataSourcePropsType) => (
          <div
            className="grid-column-container__data-wrapper__value"
            style={{ width: `${props?.width}px` }}
          >
            {props.render
              ? props.render(eachElement[props.dataPath])
              : eachElement[props.dataPath]}
          </div>
        ))}
      </div>
    </div>
  );
};
export default GridColumn;
