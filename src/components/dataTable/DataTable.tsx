import {Component, Prop, Vue} from "vue-property-decorator";
import {Table} from "@/components/dataTable/Table"
import {TableHead} from "@/components/dataTable/TableHead"
import {TableRow} from "@/components/dataTable/TableRow"
import {TableHeadCell} from "@/components/dataTable/TableHeadCell";
import {VueComponent} from "@/shims-vue";
import {TableBody} from "@/components/dataTable/TableBody";
import {TableCell} from "@/components/dataTable/TableCell";
import {StringFilter} from "@/components/dataTable/filters/StringFilter";
import {NumberFilter} from "@/components/dataTable/filters/NumberFilters";
import {BoolFilter} from "@/components/dataTable/filters/BoolFilter";
import {DataTableContext} from "@/components/dataTable/config/DataTableContext"
import {CustomProvider} from "@/components/dataTable/config/CustomProvider";

import Child from "@/components/dataTable/config/Child.vue"



export interface DataTableOptionsProps {
    options: OptionsInterface
}

interface OptionsInterface {
    columns: Array<ColumnInterface>;
    dataSource: Function | Array<any>;
    useEdit?: boolean;
    useDelete?: boolean;
    useFilters?: boolean;
    useSorting?: boolean;
}

interface ColumnInterface {
    title: string;
    dataSource: string;
    type: COLUMN_TYPE;
    useSorting?: boolean;
    useFilters?: boolean;
}

export enum COLUMN_TYPE {
    STRING = "STRING",
    NUMBER = "NUMBER",
    BOOL = "BOOL",
    DATE = "DATE",
    ACTION = "ACTION",
}

interface AnyEntityInterface {
    [key: string]: string | number | object
}

@Component
export class DataTable extends VueComponent<DataTableOptionsProps> {

    @Prop()
    options!: OptionsInterface

    private filters: any = {
        DATE: TableCell,
        STRING: StringFilter,
        NUMBER: NumberFilter,
        BOOL: BoolFilter,
    }

    mounted() {
        if (this.isActionColumnNeeded()) {
            this.options.columns.push({
                type: COLUMN_TYPE.ACTION,
                dataSource: '',
                title: 'Actions'
            })
        }
    }

    isActionColumnNeeded(): boolean {

        if (
            this.options.useFilters !== false ||
            this.options.useEdit !== false ||
            this.options.useDelete !== false
        ) {
            return true;
        }

        return false;
    }

    collectAllColumns (): Array<JSX.Element> {
        const columns = this.options.columns.map(column => {
            return (
                <TableHeadCell>
                    {column.title}
                </TableHeadCell>
            );
        })

        if (this.isActionColumnNeeded()) {
            const ActionColumnHeadCell = (
                <TableHeadCell>
                    Actions
                </TableHeadCell>
            )
            columns.push(ActionColumnHeadCell);
        }

        return  columns;
    }

    collectRows(): Array<JSX.Element> {
        let tableRows = new Array<JSX.Element>();

        if (Array.isArray(this.options.dataSource)) {
            tableRows = this.options.dataSource.map((row: AnyEntityInterface) => {
                const columns = this.options.columns.map(column => {
                    return (
                        <TableCell>
                            {row[column.dataSource]}
                        </TableCell>
                    );
                });

                if (this.isActionColumnNeeded()) {
                    const ActionBodyCell = (
                        <TableCell>

                        </TableCell>
                    );

                    columns.push(ActionBodyCell);
                }

                return (
                    <TableRow>
                        {columns}
                    </TableRow>
                );
            })
        }

        return tableRows;
    }

    collectFilters(): Array<JSX.Element> {
        const useFilters = this.options.useFilters || false;

        let filters = new Array<JSX.Element>();

        if (useFilters) {
            filters = this.options.columns.map((col) => {

                if (col.useFilters === false) {
                    return (
                        <TableCell/>
                    );
                }

                const Filter = this.filters[col.type!];

                return (
                    <TableCell>
                        <Filter/>
                    </TableCell>
                );
            })

            if (this.isActionColumnNeeded()) {
                const EmptyActionCell = (
                    <TableCell>
                        {this.options.useFilters !== false ? (<button>Apply Filters</button>) : ('')}
                    </TableCell>
                );
                filters.push(EmptyActionCell);
            }
        }

        return filters;
    }

    render() {

        const columns = this.collectAllColumns();
        const tableRows = this.collectRows();
        const filters = this.collectFilters();

        return (
            <div>
                <DataTableContext.Provider value={this.options}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns}
                        </TableRow>
                        <TableRow>
                            {filters}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableRows}
                    </TableBody>
                </Table>
                </DataTableContext.Provider>
                <CustomProvider>
                    <Child/>
                </CustomProvider>
            </div>
        );
    }
}