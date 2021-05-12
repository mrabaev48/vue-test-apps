import {Component, Prop, Vue} from "vue-property-decorator";
import {Table} from "@/components/dataTable/Table"
import {TableHead} from "@/components/dataTable/TableHead"
import {TableRow} from "@/components/dataTable/TableRow"
import {TableHeadCell} from "@/components/dataTable/TableHeadCell";
import {VueComponent} from "@/shims-vue";
import {TableBody} from "@/components/dataTable/TableBody";
import {TableCell} from "@/components/dataTable/TableCell";


export interface DataTableOptionsProps {
    options: OptionsInterface
}

interface OptionsInterface {
    columns: Array<ColumnInterface>
    dataSource: Function | Array<any>;
}

interface ColumnInterface {
    title: string,
    dataSource: string
}

interface AnyEntityInterface {
    [key: string]: string | number | object
}

@Component
export class DataTable extends VueComponent<DataTableOptionsProps> {

    @Prop() options!: OptionsInterface

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

        return (
            <div>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableRows}
                    </TableBody>
                </Table>
            </div>
        )
    }
}