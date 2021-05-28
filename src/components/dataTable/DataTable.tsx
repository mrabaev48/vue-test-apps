import {Component, Prop, Vue} from "vue-property-decorator";
import {Table} from "@/components/dataTable/components/Table"
import {TableHead} from "@/components/dataTable/components/TableHead"
import {VueComponent} from "@/shims-vue";
import {TableBody} from "@/components/dataTable/components/TableBody";
import {DataTableProvider} from "@/components/dataTable/config/DataTableProvider";
import {OptionsInterface} from "@/components/dataTable/models/OptionsInterface";
import {TableFooter} from "@/components/dataTable/components/TableFooter";


export interface DataTableOptionsProps {
    options: OptionsInterface
}

@Component
export class DataTable extends VueComponent<DataTableOptionsProps> {

    @Prop()
    options!: OptionsInterface

    render() {
        return (
            <div>
                <DataTableProvider value={this.options}>
                    <Table>
                        <TableHead/>
                        <TableBody/>
                        <TableFooter/>
                    </Table>
                </DataTableProvider>
            </div>
        );
    }
}