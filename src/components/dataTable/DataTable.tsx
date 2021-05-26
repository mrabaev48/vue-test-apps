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

    render() {
        console.log(this.options);

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

        let tableRows = null;

        if (Array.isArray(this.options.dataSource)) {
            tableRows = this.options.dataSource.map((row: AnyEntityInterface) => {
                const columns = this.options.columns.map(column => {
                    console.log('COLUMN: ', column.type);
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

        const useFilters = this.options.useFilters || false;

        let filters = null;

        console.log('isActionColumnNeeded: ', this.isActionColumnNeeded());

        if (useFilters) {
            const cols = this.options.columns.map((col) => {

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
                cols.push(EmptyActionCell);
            }

            filters = (
                <TableRow>
                    {cols}
                </TableRow>
            );
        }
        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns}
                        </TableRow>
                        {filters}
                    </TableHead>
                    <TableBody>
                        {tableRows}
                    </TableBody>
                </Table>
            </div>
        );
    }
}