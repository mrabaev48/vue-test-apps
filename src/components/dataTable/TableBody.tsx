import {Component, Vue} from "vue-property-decorator";
import {VNode} from "vue";
import {VueComponent} from "@/shims-vue";

@Component
export class TableBody extends VueComponent {
    render(): VNode {
        return (
            <tbody>
                {this.$slots.default}
            </tbody>
        )
    }
}