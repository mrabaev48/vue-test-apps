import {Component, Prop, Vue} from "vue-property-decorator";
import {Table} from "@/components/dataTable/components/Table"
import {TableHead} from "@/components/dataTable/components/TableHead"
import {TableHeadCell} from "@/components/dataTable/components/TableHeadCell";
import {VueComponent} from "@/shims-vue";
import {TableBody} from "@/components/dataTable/components/TableBody";
import {DataTableProvider} from "@/components/dataTable/config/DataTableProvider";
import {OptionsInterface} from "@/components/dataTable/models/OptionsInterface";
import {COLUMN_TYPE} from "@/components/dataTable/models/ColumnTypes";


export interface DataTableOptionsProps {
    options: OptionsInterface
}

@Component
export class DataTable extends VueComponent<DataTableOptionsProps> {

    @Prop()
    options!: OptionsInterface

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

    collectAllColumns(): Array<JSX.Element> {
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

        return columns;
    }

    render() {
        return (
            <div>
                <DataTableProvider value={this.options}>
                    <Table>
                        <TableHead/>
                        <TableBody/>
                    </Table>
                </DataTableProvider>
            </div>
        );
    }
}