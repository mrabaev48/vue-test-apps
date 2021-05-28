import {Component, Vue} from "vue-property-decorator";
import {VNode} from "vue";
import {ConsumerComponent} from "@/components/dataTable/config/ConsumerComponent";

@Component
export class TableHeadCell extends ConsumerComponent {
    render(): VNode {
        return (
            <th>
                {this.$slots.default}
            </th>
        )
    }
}