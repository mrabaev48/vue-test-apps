import {Component, Vue} from "vue-property-decorator";
import {VNode} from "vue";
import {ConsumerComponent} from "@/components/dataTable/config/ConsumerComponent";

export interface TableCellPropInterface {

}

@Component
export class TableCell extends ConsumerComponent<TableCellPropInterface> {
    render(): VNode {
        return (
            <td>
                {this.$slots.default}
            </td>
        )
    }
}