import { COLUMN_TYPE } from "./ColumnTypes";

export interface ColumnInterface {
    title: string;
    dataSource: string;
    type: COLUMN_TYPE;
    useSorting?: boolean;
    useFilters?: boolean;
}