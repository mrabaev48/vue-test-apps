import {ColumnInterface} from "@/components/dataTable/models/ColumnInterface";

export interface OptionsInterface {
    columns: Array<ColumnInterface>;
    dataSource: Function | Array<any>;
    useEdit?: boolean;
    useDelete?: boolean;
    useFilters?: boolean;
    useSorting?: boolean;
}