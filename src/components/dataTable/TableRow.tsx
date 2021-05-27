import {Component, Vue} from "vue-property-decorator";
import {VNode} from "vue";
import {VueComponent} from "@/shims-vue";

@Component
export class TableRow extends VueComponent {
    render(): VNode {
        console.log('ROW: ', this)
        return (
            <tr>
                {this.$slots.default}
            </tr>
        )
    }
}