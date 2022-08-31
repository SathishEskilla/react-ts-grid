export interface GridColumnPropsType {
  dataPath: string;
  width?: number;
  dataSource?: GridDataSourcePropsType[];
  render?: Function;
}

export interface GridDataSourcePropsType {
  [key: string]: string | Date | number;
}
