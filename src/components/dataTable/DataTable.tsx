import {Component, Prop, Vue} from "vue-property-decorator";
import {Table} from "@/components/dataTable/Table"
import {TableHead} from "@/components/dataTable/TableHead"
import {TableRow} from "@/components/dataTable/TableRow"
import {TableHeadCell} from "@/components/dataTable/TableHeadCell";
import {VueComponent} from "@/shims-vue";
import {TableBody} from "@/components/dataTable/TableBody";
import {TableCell} from "@/components/dataTable/TableCell";
import {StringFilter} from "@/components/dataTable/filters/StringFilter";


export interface DataTableOptionsProps {
    options: OptionsInterface
}

interface OptionsInterface {
    columns: Array<ColumnInterface>
    dataSource: Function | Array<any>;
    useFilters?: boolean
}

interface ColumnInterface {
    title: string,
    dataSource: string,
    type?: COLUMN_TYPE
}

export enum COLUMN_TYPE {
    STRING = "STRING",
    NUMBER = "NUMBER",
    BOOL = "BOOL",
    DATE = "DATE"
}

interface AnyEntityInterface {
    [key: string]: string | number | object
}

@Component
export class DataTable extends VueComponent<DataTableOptionsProps> {

    @Prop() options!: OptionsInterface

    private filters: any = {
        DATE: TableCell,
        STRING: StringFilter,
        NUMBER: TableCell,
        BOOL: TableCell,
    }

    render() {
        console.log('options: ', this.options)
        const columns = this.options.columns.map(column => {
            return (
                <TableHeadCell>
                    {column.title}
                </TableHeadCell>
            )
        })

        let tableRows = null

        if (Array.isArray(this.options.dataSource)) {
            tableRows = this.options.dataSource.map((row: AnyEntityInterface) => {
                const columns = this.options.columns.map(column => {
                    return (
                        <TableCell>
                            {row[column.dataSource]}
                        </TableCell>
                    )
                })
                return (
                    <TableRow>
                        {columns}
                    </TableRow>
                )
            })
        }

        const useFilters = this.options.useFilters || false

        let filters = null

        if (useFilters) {
            if (Array.isArray(this.options.dataSource)) {
                filters = this.options.dataSource.map((row: AnyEntityInterface) => {
                    const columns = this.options.columns.map(column => {
                        const Filter = this.filters[column.type!]
                        return (
                            <TableCell>
                                <Filter/>
                            </TableCell>
                        )
                    })
                    return (
                        <TableRow>
                            {columns}
                        </TableRow>
                    )
                })
            }
        }

        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns}
                        </TableRow>
                        {this.filters}
                    </TableHead>
                    <TableBody>
                        {tableRows}
                    </TableBody>
                </Table>
            </div>
        )
    }
}