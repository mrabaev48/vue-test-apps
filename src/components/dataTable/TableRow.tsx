import {Component, Vue} from "vue-property-decorator";
import {VNode} from "vue";
import {VueComponent} from "@/shims-vue";

@Component
export class TableRow extends VueComponent {
    render(): VNode {
        return (
            <tr>
                {this.$slots.default}
            </tr>
        )
    }
}