import {Component, Vue} from "vue-property-decorator";
import {VNode} from "vue";
import {ConsumerComponent} from "@/components/dataTable/config/ConsumerComponent";
import {TableRow} from "@/components/dataTable/components/TableRow";

export interface TableFooterPropInterface {

}

@Component
export class TableFooter extends ConsumerComponent<TableFooterPropInterface> {
    render(): VNode {
        return (
            <tfoot>
                <TableRow>
                </TableRow>
            </tfoot>
        )
    }
}