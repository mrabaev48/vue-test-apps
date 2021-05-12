import {Component, Vue} from "vue-property-decorator";
import {VNode} from "vue";
import {VueComponent} from "@/shims-vue";

@Component
export class TableHeadCell extends VueComponent {
    render(): VNode {
        return (
            <th>
                {this.$slots.default}
            </th>
        )
    }
}