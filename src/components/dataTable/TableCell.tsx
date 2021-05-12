import {Component, Vue} from "vue-property-decorator";
import {VNode} from "vue";
import {VueComponent} from "@/shims-vue";

@Component
export class TableCell extends VueComponent {
    render(): VNode {
        return (
            <td>
                {this.$slots.default}
            </td>
        )
    }
}