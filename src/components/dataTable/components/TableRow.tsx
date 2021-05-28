import {Component} from "vue-property-decorator";
import {VNode} from "vue";
import {ConsumerComponent} from "@/components/dataTable/config/ConsumerComponent";

export interface TableRowPropInterface {

}

@Component
export class TableRow extends ConsumerComponent<TableRowPropInterface> {
    render(): VNode {
        return (
            <tr>
                {this.$slots.default}
            </tr>
        )
    }
}