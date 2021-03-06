import {Component, Vue} from "vue-property-decorator";
import {VNode} from "vue";
import {ConsumerComponent} from "@/components/dataTable/config/ConsumerComponent";

export interface TableHeadCellPropInterface {

}

@Component
export class TableHeadCell extends ConsumerComponent<TableHeadCellPropInterface> {
    render(): VNode {
        return (
            <th>
                {this.$slots.default}
            </th>
        )
    }
}